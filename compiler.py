from pathlib import Path
import json, re

all_parts = {}
base_res = {
    "def":{"x":1200,"y":1600},
    "xl":{"x":2400,"y":1600}
}


def get_types(part):
    types = []
    for part_type in part:
        types.append(part_type['partType'])
    return types

def update_type_data(elem_part, index, elem_layer, svg_content, is_alt):
    if not is_alt:
        all_parts[elem_part][index]['maskOrder'].append(elem_layer)
        all_parts[elem_part][index]['svgData'].append(svg_content)
        all_parts[elem_part][index]['svgDataAlt'].append("")
    else:
        all_parts[elem_part][index]['svgDataAlt'].pop() #replace last empty alt with alt data
        all_parts[elem_part][index]['svgDataAlt'].append(svg_content)

def find_index(list_of_dicts, key, value):
    for index, dictionary in enumerate(list_of_dicts):
        if key in dictionary and dictionary[key] == value:
            return index
    return -1

def return_svgs(filedata):
    #print("test")
    svg_data = []
    svg_regex = r"(<svg[\s\S]*?<\/svg>)" # grabs the full svg element

    separator_regex = r"(<svg[^>]*>)([\s\S]*)(<\/svg>)"
    width_regex = r'width="(\d*)[\.\d*]*p?[t|x]?"'
    height_regex = r'height="(\d*)[\.\d*]*p?[t|x]?"'
    image_regex = r"<image[^>]*?\/>"

    match = re.search(svg_regex, filedata)
    if match:
        match_data = match.group(1)
        
        # collect the individual svg parts
        svg_start_tag = re.search(separator_regex, match_data).group(1)
        svg_content = re.search(separator_regex, match_data).group(2)

        # find if the svg is an XL. width and height data is stored in the start tag
        svg_width = int(re.search(width_regex, svg_start_tag).group(1))
        svg_height = int(re.search(height_regex, svg_start_tag).group(1))

        aspect_ratio = svg_width / svg_height # 0.75 for reg, 1.5 for xL
        is_xl = True if aspect_ratio == 1.5 else False

        if is_xl:
            x_shrink_factor = base_res['xl']['x'] / svg_width
            y_shrink_factor = base_res['xl']['y'] / svg_height
        else:
            x_shrink_factor = base_res['def']['x'] / svg_width
            y_shrink_factor = base_res['def']['y'] / svg_height

        # wrap the svg content with a g element
        match_data = match_data.replace(svg_content, f'<g transform="scale({x_shrink_factor} {y_shrink_factor})" >{svg_content}</g>')

        # scrub image elements from the svg if there are any
        match_data = re.sub(image_regex, '', match_data)

        svg_data.append({"data": match_data, "is_xl": is_xl})

        # wipe original data from the selection
        filedata = filedata.replace(match.group(1), "")

        #print(filedata)
    return svg_data


def list_files_pathlib(path):
    for entry in path.iterdir():
        if entry.is_dir():
            list_files_pathlib(entry)
        elif entry.is_file():
            with open(entry, 'r') as file:
                image_path = str(entry).split("\\")                     # Only works with windows but whatever lol
                # print(image_path)                    
                                             # image file svg data to be compiled into a single file, eventually
                
                elem_part = image_path[1]                         # bodypart
                #print(elem_part)
                elem_type_name = image_path[2]                          # nice name
                filename_formatted = image_path[3].replace(f'{elem_part}_','').split('_')
                #print(filename_formatted)
                svg_content = return_svgs(file.read())
                #print(len(svg_content))  
                elem_type = filename_formatted[0]                 # species
                
                if (filename_formatted[-1][:-4] == 'alt'):        # check if it is an alt layer for hair
                    is_alt = True
                    elem_layer = filename_formatted[-2]   
                else:
                    is_alt = False 
                    elem_layer = filename_formatted[-1][:-4] 
                    
                if (filename_formatted[-1][:-4] == 'back'):       # check if there is a back layer for taur
                    elem_part = f'{elem_part}_back'               
                    elem_layer = filename_formatted[-2]           
                else:
                    elem_layer = filename_formatted[-1][:-4]      

                if elem_part not in all_parts:
                    all_parts[elem_part] = []

                # Define new type if not present
                if elem_type not in get_types(all_parts[elem_part]):
                    new_type = {
                        "partName": elem_type_name,
                        "partType": elem_type,
                        "maskOrder": [elem_layer],
                        "svgData": [svg_content[0]['data']],
                        "svgDataAlt": [""],
                        "isXL": svg_content[0]['is_xl']
                    }
                    all_parts[elem_part].append(new_type)
                # If type is present, append new data to the rendering order
                elif elem_type in get_types(all_parts[elem_part]):
                    index = find_index(all_parts[elem_part], 'part_type', elem_type)
                    update_type_data(elem_part, index, elem_layer, svg_content[0]['data'], is_alt)
    

directory_path = Path('./images/')
list_files_pathlib(directory_path)
print("Compiling partsList.js...")
with open("partsList.js", "w") as js_file:
    js_file.write(f"const partsList = {json.dumps(all_parts, indent=4)}")
print("Successfully compiled partsList.js!")
