from pathlib import Path
import json
import re 

all_parts = {}

def get_types(part):
    types = []
    for part_type in part:
        types.append(part_type['partType'])
    return types

def update_type_data(elem_part, index, elem_layer, svg_content, svg_content_alt):
    all_parts[elem_part][index]['maskOrder'].append(elem_layer)
    all_parts[elem_part][index]['svgData'].append(svg_content)
    all_parts[elem_part][index]['svgDataAlt'].append(svg_content_alt)

def find_index(list_of_dicts, key, value):
    for index, dictionary in enumerate(list_of_dicts):
        if key in dictionary and dictionary[key] == value:
            return index
    return -1

def return_svgs(filedata):
    #print("test")
    svg_data = []
    svg_regex = r"(<svg[\s\S]*?<\/svg>)" #lazy 
    match = re.search(svg_regex, filedata)
    if match:
        svg_data.append(match.group(1))
        filedata = filedata.replace(match.group(1), "")
        # check for alt
        match2 = re.search(svg_regex, filedata)
        if match2:
            svg_data.append(match2.group(1))
    return svg_data


def list_files_pathlib(path):
    for entry in path.iterdir():
        if entry.is_dir():
            list_files_pathlib(entry)
        elif entry.is_file():
            with open(entry, 'r') as file:
                image_path = str(entry).split("\\")                     # Only works with windows but whatever lol
                #print(image_path)                    
                                             # image file svg data to be compiled into a single file, eventually
                
                elem_part = image_path[1]                               # bodypart
                #print(elem_part)
                elem_type_name = image_path[2]                          # nice name
                filename_formatted = image_path[3].replace(f'{elem_part}_','').split('_')
                #print(filename_formatted)
                svg_content = return_svgs(file.read())
                #print(len(svg_content))  
                elem_type = filename_formatted[0]                 # species
                elem_layer = filename_formatted[-1][:-4]          # layer
                #if elem_part == 'hair_front':
                    #print(f'-------{elem_type}---------')
                    #print(f'-------{elem_layer}---------')
                    

                # Define new part if not present
                if elem_part not in all_parts:
                    all_parts[elem_part] = []

                # Define new type if not present
                if elem_type not in get_types(all_parts[elem_part]):
                    new_type = {
                        "partName": elem_type_name,
                        "partType": elem_type,
                        "maskOrder": [elem_layer],
                        "svgData": [svg_content[0]],
                        "svgDataAlt": [svg_content[1]] if len(svg_content)>1 else [""]
                    }
                    all_parts[elem_part].append(new_type)
                # If type is present, append new data to the rendering order
                elif elem_type in get_types(all_parts[elem_part]):
                    index = find_index(all_parts[elem_part], 'part_type', elem_type)
                    update_type_data(elem_part, index, elem_layer, svg_content[0], svg_content[1] if len(svg_content)>1 else "")

if __name__ == '__main__':
    directory_path = Path('./images/')
    list_files_pathlib(directory_path)
    with open("partsList.js", "w") as js_file:
        js_file.write(f"let partsList = {json.dumps(all_parts, indent=4)}")
