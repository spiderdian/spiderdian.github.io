//constructor defaults to basic human
class BodyPart {
    constructor(part) {
        this.partName  = part.partName;
        this.partType = part.partType;
        this.svgData = part.svgData;
        this.svgDataAlt = part.svgDataAlt;
        this.maskOrder = part.maskOrder;
        this.isXL = part.isXL;
    }
}
//deep copy 
class Palette {
    constructor(palette) {
        this.name = palette.name;
        this.data = JSON.parse(JSON.stringify(palette.data));
    }
}
export { BodyPart, Palette };