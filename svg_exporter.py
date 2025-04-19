from PIL import Image
import potrace, runpy
from psd_tools import PSDImage
from collections import Counter
from pathlib import Path

def get_most_common_color(image):
    pixels = list(image.getdata())
    non_transparent_pixels = [rgb[:3] for rgb in pixels if rgb[3] > 0]
    color_counts = Counter(non_transparent_pixels)
    
    most_common_color = color_counts.most_common(1)[0][0]
    hex_color = "#{:02x}{:02x}{:02x}".format(*most_common_color).upper()
    return hex_color


def convert_to_svg(type_group_name, part_group_name, layer_group_name, layers, original_image, transparency_percent):
    cutoff_value = 255 - ((256 * transparency_percent/100) - 1)

    # Generate an SVG manually
    svg_header = '<svg width="{}" height="{}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {} {}">'.format(original_image.width, original_image.height, original_image.width, original_image.height)
    svg_path = ""
    svg_footer = "</svg>"
    for layer in layers:
        if not layer.visible or layer.is_group(): # skip if the layer is hidden, or if it is yet another nested folder
            continue

        # Load the PNG image and convert it to a black-and-white bitmap
        image = Image.new("RGBA", original_image.size)

        x,y,_,_ = layer.bbox
        layer_data = layer.topil()
        image.paste(layer_data, (x, y), layer_data)

        # colored parts for line layers specifically 
        
        if '_line' in layer_group_name:
            predominant_color = get_most_common_color(image)
        else:
            predominant_color = "#000000"

        r,g,b,a = image.split()
        # if a line layer, get color here and save for later


        black = Image.new("L", original_image.size, 0)
        image = Image.merge("RGBA", (black, black, black, a))

        #transparent_canvas.save(f'svg_output\\{part_group_name}_{layer_group_name}.png')
        #image.save(f'svg_output\\{part_group_name}_{layer_group_name}.png')
        
        

        # filter pixels based on transparency
        
        a = a.point(lambda p: 255 if p > cutoff_value else 0)

        # Create a new image with the new filtered transparency 
        processed_image_mask = Image.merge("RGBA", (black,black,black,a))

        # Create a new all-white image
        processed_image = Image.new("RGB", original_image.size, (255, 255, 255))

        # Apply the mask to the new image based on the RGB values only
        processed_image.paste(processed_image_mask, mask=processed_image_mask.split()[3]) # 3 is the alpha channel

        # Convert to binary for the bitmap with dithering disabled so the trace doesnt SUCK
        processed_image = processed_image.convert("1", dither=None)
        #processed_image.save(f'svg_output\\{part_group_name}_{layer_group_name}.png')

        
        bitmap = potrace.Bitmap(processed_image)

        # Trace the bitmap into a vector outline
        path = bitmap.trace(
                turdsize=1,
                turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY,
                alphamax=1,
                opticurve=False,
                opttolerance=0.2,
        )
        
        #rounding_places = 2

        # Construct a single compound path
        path_data = ""
        for curve in path:
            path_data += "M {} {} ".format(round(curve.start_point.x,2), round(curve.start_point.y,2))
            for segment in curve:
                if segment.is_corner:
                    path_data += "L {} {} ".format(round(segment.c.x,2), round(segment.c.y,2))
                else:
                    path_data += "C {} {} {} {} {} {} ".format(round(segment.c1.x,2), round(segment.c1.y,2), round(segment.c2.x,2), round(segment.c2.y,2), round(segment.end_point.x,2), round(segment.end_point.y,2))
            path_data += "Z "  # Close the path

        # Create a single <path> element with even-odd fill rule
        svg_path += f'<path d="{path_data}" opacity="{layer.opacity/255}" fill="{predominant_color}" stroke="none" fill-rule="evenodd"/>'
       
    svg_content = svg_header + svg_path + svg_footer

    # Save the SVG file
    directory = f"images\\{type_group_name}\\{part_group_name}"

    #Create directory if it doesnt exist
    Path(directory).mkdir(parents=True, exist_ok=True)

    with open(f"{directory}\\{layer_group_name}.svg", "w") as f:
        f.write(svg_content)


    
def extract_psd_layers(psd_path):
    image = PSDImage.open(psd_path)

    try: 
        transparency_percent = int(input("Enter % opacity cutoff (default is 66): "))
    except ValueError:
        transparency_percent = 66
    

    # the .visible flag makes it so only the enabled layers get rendered
    for type_group in image:
        if type_group.is_group() and type_group.visible: # body part
            for part_group in type_group:
                if part_group.is_group() and part_group.visible: # name of the piece
                    for layer_group in part_group:
                        layers = []
                        if layer_group.is_group() and layer_group.visible: # the svg file data for the piece
                            layers = [layer for layer in layer_group if not layer.is_group()]
                            convert_to_svg(type_group.name, part_group.name, layer_group.name, layers, image, transparency_percent)

    print("SVG file(s) generated successfully!")
    runpy.run_path("compiler.py")



chimera_files = ['chimera.psd', 'chimera_xl.psd']
try: 
    file = int(input(f"Enter 1 for {chimera_files[0]}, enter 2 for {chimera_files[1]} (default is 1): "))
    if file < 1 or file > 2:
        file = 1
except ValueError:
    file = 1

psd_layers = extract_psd_layers(chimera_files[file - 1])
