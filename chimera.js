import {BodyPart,Palette} from "./ChimeraParts.js";
let canvas = document.getElementById("chimera");
let ctx = canvas.getContext("2d");


// manually set canvas dimension attributes in here
let canvasX = 1200;
let canvasY = 800;

canvas.setAttribute('width', canvasX);
canvas.setAttribute('height', canvasY);

let xPos = 0.0
let yPos = 0.0
let img = new Image();
let chimeraGraphic = ""
let amplitude = 0.0;
let maxAmplitude = 8.0;
let bounceTimer = 0.0

//split body into sections
//lowest = legs_feet and legs_full
//lower = legs_hips and tail
//middle = torso
//high = neck and shoulders and arms
//highest = all head parts and hairs

let offsetFactor = 1.0;
const pixelOffset = Object.freeze({
    LOWEST:   0.0,
    LOW:  1.0,
    MIDDLE: 2.0,
    HIGH: 3.0,
    HIGHEST: 4.0
});

let animationOffsets = {
    'hair_back': pixelOffset.HIGHEST, 
    'wings': pixelOffset.MIDDLE, 
    'tail': pixelOffset.LOW,
    'legs_feet': pixelOffset.LOWEST, 
    'legs_hips': pixelOffset.LOW,
    'legs_full': pixelOffset.LOWEST,
    'torso': pixelOffset.MIDDLE,
    'neck': pixelOffset.HIGH,
    'arms': pixelOffset.HIGH,
    'shoulders': pixelOffset.HIGH,
    'ears': pixelOffset.HIGHEST,
    'head': pixelOffset.HIGHEST,
    'head_unique': pixelOffset.HIGHEST,
    'nose': pixelOffset.HIGHEST,
    'mouth': pixelOffset.HIGHEST,
    'muzzle': pixelOffset.HIGHEST,
    'eyes': pixelOffset.HIGHEST,
    'horns': pixelOffset.HIGHEST,
    'hair_front': pixelOffset.HIGHEST,
    'horns_front': pixelOffset.HIGHEST,
}

// 12 fps = 83.333 MS - 17 MS / 2 = ~75 ms
const fps = 24
const callBackMS = 17 //approximately 17 ms for function callback
function getMSFromFPS(fps) {
    return 1000 / fps - callBackMS / 2;
}
//last timestamp
let last_frame = Date.now();

requestAnimationFrame(function tick() {
    if (Date.now() - last_frame >= getMSFromFPS(fps)) { 
        drawChimera();
        last_frame = Date.now();
    }

    requestAnimationFrame(tick);
});

const sounds = {
    "shuffle": new Audio('sounds/shuffle.ogg'),
    "select" : new Audio('sounds/select.ogg')
}

const svgElementStart = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"\nwidth="2400.000000pt" height="1600.000000pt" viewBox="0 0 2400.000000 1600.000000"\n preserveAspectRatio="none">'
const svgElementEnd = '</svg>'
const renderOrder = ['hair_back', 'wings', 'tail', 'legs_feet', 'legs_hips', 'legs_full', 'torso', 'neck', 'arms', 'shoulders', 'ears', 'head', 'horns', 'head_unique', 'nose', 'mouth', 'muzzle', 'eyes', 'hair_front', 'horns_front']
const displayOrder = ['eyes', 'nose', 'mouth', 'muzzle', 'horns_front', 'horns', 'ears', 'head', 'head_unique', 'hair_front', 'hair_back', 'neck', 'shoulders', 'arms', 'torso', 'wings', 'tail', 'legs_hips', 'legs_feet', 'legs_full']
const layerList = ["skin1", "scale1", "skin2", "fur1", "fur2", "sclera", "iris", "color"]
const niceNames = {
    "skin1": "Skin",
    "scale1": "Scales/Chitin",
    "skin2": "Sec. Skin",
    "fur1": "Fur/Feathers",
    "fur2": "Sec. Fur/Feathers",
    "sclera": "Sclera",
    "iris": "Iris",
    "color": "Hair"
}

let sideNav1Open = false
let sideNav2Open = false

async function playSound(sound, volume) {
    if (volume) {
        sounds[sound].volume = volume
    } else {
        sounds[sound].volume = 1
    }
    let rate = 1.0 + (amplitude / maxAmplitude) * 0.5  //lol 
    sounds[sound].load();
    sounds[sound].playbackRate = rate;
    sounds[sound].play().catch((e)=>{})
}

$('button.randomize').on('click', function() {
    playSound('shuffle', 0.2);
    randomize();
    updateSwatchesToPalette();
    amplitude += 3.5
    if (amplitude > maxAmplitude) 
        amplitude = maxAmplitude
    bounceTimer = 1.0
});

$('button.openbtn').on('click', function() {
    let sidebar = document.getElementById("partSideBar");
    if (sideNav1Open) {
        //sidebar.style.transform = "translateX(0)";
        //sidebar.className = "extended";
        sidebar.style.width = '0%'
    } else {
        //sidebar.style.transform = "translateX(-100%)";
        //sidebar.className = "collapsed";
        sidebar.style.width = '32%'
    }
    sideNav1Open = !sideNav1Open
});

$('button.openbtn2').on('click', function() {
    let sidebar = document.getElementById("paletteSideBar");
    if (sideNav2Open) {
        sidebar.style.width = '0%'
    } else {
        sidebar.style.width = '32%'
    }
    sideNav2Open = !sideNav2Open
});

//disables the up and down arrow keys for the select box so we don't get any unwanted behavior.
$('select').on('keydown', function(e){
    if(e.keyCode === 38 || e.keyCode === 40) { //up or down
        e.preventDefault();
        return false;
    }
});

//non-image related data
let chimeraConfigData = {
    palette: new Palette(paletteList[0]),
    paletteIndex: 0,
    legsFullToggled: false, //keeping this separate as this has custom logic
    muzzleToggled: false, //keeping this separate as this has custom logic
    headUniqueToggled: false, //keeping this separate as this has custom logic
    legsFullToggleChance: 0.20, 
    muzzleToggleChance: 0.30,
    headUniqueToggleChance: 0.10,
}

//if 'enabled' is a key it is marked as optional during randomization, add the chance for it to be enabled out of 1, which is 100%
let chimeraSVGData = {
    wings: { data: new BodyPart(getListIndex('wings', 'base')), enabled: false, chance: 0.50, secondaryEnabled: true },
    tail: { data: new BodyPart(getListIndex('tail', 'base')), enabled: false, chance: 0.50, secondaryEnabled: true},
    legs_feet: { data: new BodyPart(getListIndex('legs_feet', 'base')), secondaryEnabled: true},
    legs_hips: { data: new BodyPart(getListIndex('legs_hips', 'base')), secondaryEnabled: true},
    legs_full: { data: new BodyPart(getListIndex('legs_full', 'base')), secondaryEnabled: true},
    torso: { data: new BodyPart(getListIndex('torso', 'base')), secondaryEnabled: true},
    arms: { data: new BodyPart(getListIndex('arms', 'base')), secondaryEnabled: true},
    neck: { data: new BodyPart(getListIndex('neck', 'base')), secondaryEnabled: true},
    shoulders: { data: new BodyPart(getListIndex('shoulders', 'base')), secondaryEnabled: true},
    ears: { data: new BodyPart(getListIndex('ears', 'base')), enabled: true, chance: 0.75, secondaryEnabled: true},
    head: { data: new BodyPart(getListIndex('head', 'base')), secondaryEnabled: true},
    head_unique: { data: new BodyPart(getListIndex('head_unique', 'base')), secondaryEnabled: true},
    nose: { data: new BodyPart(getListIndex('nose', 'base')), secondaryEnabled: true},
    mouth: { data: new BodyPart(getListIndex('mouth', 'base')), secondaryEnabled: true},
    muzzle: { data: new BodyPart(getListIndex('muzzle', 'base')), secondaryEnabled: true},
    eyes: { data: new BodyPart(getListIndex('eyes', 'base')), secondaryEnabled: true},
    hair_front: { data: new BodyPart(getListIndex('hair_front', 'default')), enabled: true, chance: 0.85, secondaryEnabled: true},
    hair_back: { data: new BodyPart(getListIndex('hair_back', 'longer')), enabled: true, chance: 0.85, secondaryEnabled: true},
    horns: { data: new BodyPart(getListIndex('horns', 'base')), enabled: false, chance: 0.50, secondaryEnabled: true},
    horns_front: { data: new BodyPart(getListIndex('horns_front', 'base')), enabled: false, chance: 0.50, secondaryEnabled: true},
};

//let test = true;





// legsFullToggled: false, //keeping this separate as this has custom logic
// muzzleToggled: false, //keeping this separate as this has custom logic
// headUniqueToggled: false, //keeping this separate as this has custom logic


function resetSelectedParts() {
    //console.log("reset")
    let partsToReset = document.getElementsByClassName("update_part_selected");
    for (let i = partsToReset.length - 1; i >= 0; i--) { //needs to be done weirdly and specifically but whatever
        partsToReset[i].className = "update_part"
    }

    for (const [key, value] of Object.entries(chimeraSVGData)) {
        //muzzle logic
        if (chimeraConfigData['muzzleToggled'] && (key == 'mouth' || key == 'nose')) {
            continue
        }
        else if (!chimeraConfigData['muzzleToggled'] && (key == 'muzzle')) {
            continue
        }

        //legs_full logic
        if (chimeraConfigData['legsFullToggled'] && (key == 'legs_hips' || key == 'legs_feet' || key == 'tail')) {
            continue
        }
        else if (!chimeraConfigData['legsFullToggled'] && (key == 'legs_full')) {
            continue
        }

        //head_unique logic
        if (chimeraConfigData['headUniqueToggled'] && (key == 'hair_front' || key == 'hair_back' || key == 'head')) {
            continue
        }
        else if (!chimeraConfigData['headUniqueToggled'] && (key == 'head_unique')) {
            continue
        }

        let partID = key + '_' + chimeraSVGData[key]['data']['partType']
        let partElement = document.getElementById(partID)
        
        if ("enabled" in chimeraSVGData[key]) { 
            if (chimeraSVGData[key]['enabled']) {
                partElement.className = "update_part_selected"
            } else {
                let partIDNone = key + '_none'
                let partElementNone = document.getElementById(partIDNone)
                partElementNone.className = "update_part_selected"
            }
        } else {
            partElement.className = "update_part_selected"
        }

    }
    //test = false


    // for (let i = 0; i < displayOrder.length; i++) {
    //     let partID = displayOrder[i] + '_' + chimeraSVGData[displayOrder[i]]['data']['partType']
    //     console.log(partID)
    //     let partElement = document.getElementById(partID);
    //     console.log(partElement)
    //     partElement.className = "update_part_selected"
    // }
}

function initSideBarElements() {
    for (let i = 0; i < displayOrder.length; i++) {
        //highlight the selected part

        let parts = partsList[displayOrder[i]]
        let div = document.createElement('div'); //creates the divider
        let img = document.createElement('img'); //creates the image
        img.src = 'icons/' + displayOrder[i] + '.png';
        let src = document.getElementById('partContainer');
        div.className = 'dropdown';
        div.appendChild(img);

        let div2 = document.createElement('div'); //creates the divider
        div2.className = 'dropdown-content';
        for (let j = 0; j < parts.length; j++) {
            let button = document.createElement('button'); //creates the button
            button.className = "update_part"
            button.id = displayOrder[i] +'_' + parts[j]['partType']
            button.onclick = function(){
                updatePartType(displayOrder[i], parts[j]);
                resetSelectedParts()
            };
            let buttonText = document.createTextNode(parts[j]['partName']);
            button.appendChild(buttonText);
            div2.appendChild(button);
        }
        if ("enabled" in chimeraSVGData[displayOrder[i]]) { //logic for none
            let disableButton = document.createElement('button'); //creates the button
            disableButton.className = "update_part"
            disableButton.id = displayOrder[i] +'_none'
            disableButton.onclick = function(){
                updatePartType(displayOrder[i], null);
                resetSelectedParts()
            };
            let disableButtonText = document.createTextNode("None");
            disableButton.appendChild(disableButtonText);
            div2.appendChild(disableButton);
        }
        div.appendChild(div2);
        src.appendChild(div);
    }
}

function updatePartType(partString, partType) {
    if (partType) {
        let prevToggle = false
        let newToggle = false
        if (partString == 'legs_full'){
            prevToggle = chimeraConfigData['legsFullToggled']
            chimeraConfigData['legsFullToggled'] = true
            newToggle = chimeraConfigData['legsFullToggled']
        }
        else if (partString == 'legs_hips' || partString == 'legs_feet' || partString == 'tail') {
            prevToggle = chimeraConfigData['legsFullToggled']
            chimeraConfigData['legsFullToggled'] = false
            newToggle = chimeraConfigData['legsFullToggled']
        }
        //muzzle/beak logic
        else if (partString == 'muzzle') {
            prevToggle = chimeraConfigData['muzzleToggled']
            chimeraConfigData['muzzleToggled'] = true
            newToggle = chimeraConfigData['muzzleToggled']
        }
        else if (partString == 'mouth' || partString == 'nose') {
            prevToggle = chimeraConfigData['muzzleToggled']
            chimeraConfigData['muzzleToggled'] = false
            newToggle = chimeraConfigData['muzzleToggled']
        }
        else if (partString == 'head_unique') {
            prevToggle = chimeraConfigData['headUniqueToggled']
            chimeraConfigData['headUniqueToggled'] = true
            newToggle = chimeraConfigData['headUniqueToggled']
        }
        else if (partString == 'head' || partString == 'hair_front' || partString == 'hair_back') {
            prevToggle = chimeraConfigData['headUniqueToggled']
            chimeraConfigData['headUniqueToggled'] = false
            newToggle = chimeraConfigData['headUniqueToggled']
        }
        
        if (chimeraSVGData[partString]['data']['partName'] == partType['partName'] && prevToggle == newToggle) { //the same part is selected
            chimeraSVGData[partString]['secondaryEnabled'] = !chimeraSVGData[partString]['secondaryEnabled']
        }
        else { //a new part is selected 
            chimeraSVGData[partString]['secondaryEnabled'] = true
            chimeraSVGData[partString]['data'] = new BodyPart(partType)
        }
        
        if ("enabled" in chimeraSVGData[partString]) { 
            chimeraSVGData[partString]['enabled'] = true
        }
    } 
    else {
        chimeraSVGData[partString]['enabled'] = false
    }

    amplitude += 2.5;
    if (amplitude > maxAmplitude) 
        amplitude = maxAmplitude
    playSound('select', 0.2);
}

// Return the list index of the part type, defaults to 0 if it cannot be found
function getListIndex(part, type) {
    //console.log(partsList[part])
    let listIndex = 0
    partsList[part].forEach((part, index) => {
        if (part['partType'] == type) {
            listIndex = index
        }
    });
    return partsList[part][listIndex];
}

function randomize() {
    let paletteIndex = getRandomNumber(paletteList.length)
    chimeraConfigData['palette'] = new Palette(paletteList[paletteIndex]); //= paletteList[];
    chimeraConfigData['paletteIndex'] = paletteIndex;
    chimeraConfigData['legsFullToggled'] = Math.random() <= chimeraConfigData['legsFullToggleChance'] ? true : false; 
    chimeraConfigData['muzzleToggled'] = Math.random() <= chimeraConfigData['muzzleToggleChance'] ? true : false; 
    chimeraConfigData['headUniqueToggled'] = Math.random() <= chimeraConfigData['headUniqueToggleChance'] ? true : false; 
    for (const [key, value] of Object.entries(chimeraSVGData)) {
        chimeraSVGData[key]['data'] = new BodyPart(partsList[key][getRandomNumber(partsList[key].length)])
        if ("enabled" in chimeraSVGData[key]) { //if the part has an enabled key, randomize
            chimeraSVGData[key]['enabled'] = Math.random() <= chimeraSVGData[key]['chance'] ? true : false; // enabled 50% of the time
        }
        chimeraSVGData[key]['secondaryEnabled'] = Math.random() <= 0.30 ? false : true;
    } //just for consistency ig? looks weird with only back enabled and not front
    if (chimeraSVGData['hair_back']['enabled']) {
        chimeraSVGData['hair_front']['enabled'] = true;
    }
    document.getElementById("paletteSelect").value = paletteList[paletteIndex]['name'];
    resetSelectedParts()
}

function generatePartGrahpic(layer, part, altEnabled) {
    let graphic = ""
    for (let i = 0; i < part.maskOrder.length; i++) {
        let data = part[!altEnabled ? 'svgData' : 'svgDataAlt'][i]
        if (altEnabled && data == "") { //if no alt data present, set to original
            data = part['svgData'][i]
        }
        const fillRegex = /fill="#[0-9a-fA-F]{6}"/
        const fillRegexAlt = /fill:#[0-9a-fA-F]{6}/ //required for new pieces since the fill is in the style attribute

        //replace whatever is in the g element fill field with data from the palette, based on its layer (mask order)
        if (part.maskOrder[i] != 'line') {

            //console.log(part.maskOrder[i])
            if (!chimeraSVGData[layer]['secondaryEnabled'] && part.maskOrder[i] == 'fur2') {
                data = data.replace(fillRegex, 'fill="' + chimeraConfigData.palette['data']['fur1'] + '"')
                data = data.replace(fillRegexAlt, 'fill:' + chimeraConfigData.palette['data']['fur1'] )
            }
            else {
                data = data.replace(fillRegex, 'fill="' + chimeraConfigData.palette['data'][part.maskOrder[i]] + '"')
                data = data.replace(fillRegexAlt, 'fill:' + chimeraConfigData.palette['data'][part.maskOrder[i]] )
            }
        }
        const graphicsRegex = /<g[\s\S]*<\/g>/
        //create a string of graphics to prevent out-of-order svg loading, and wrap the graphic data in an extra graphic layer to allow us to theoretically animate it. maybe
        //console.log(yPos + animationOffsets[layer])
        //
        if (part['isXL']) {
            console.log(part['isXL'])
        }
        
        let xlString = part['isXL'] ? '' :  ' translate(' + canvasX / 2 + ' 0)'
        let wrapper = '<g transform="scale(1.0' + (1 - offsetFactor * 0.001) + ')' + xlString + ' translate(' + (xPos) + ',' + (yPos + (animationOffsets[layer]  * offsetFactor)) + ')">\n' + data.match(graphicsRegex) + '\n</g>'
        //console.log(wrapper)
        graphic += wrapper
    }
    return graphic
}

function compileGraphic() {
    let compiledGraphic = ""
    for (let i = 0; i < renderOrder.length; i++) {
        //console.log(chimeraSVGData[renderOrder[i]])
        if ("enabled" in chimeraSVGData[renderOrder[i]]) { //optional parts
            if (chimeraSVGData[renderOrder[i]]['enabled']) {
                //console.log("hi")
                if (renderOrder[i] == 'hair_front') { //if horns are enabled, render the alt for hair front
                    if (chimeraSVGData['horns_front']['enabled']) {
                        if (!chimeraConfigData.headUniqueToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], true)
                    } else {
                        if (!chimeraConfigData.headUniqueToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
                    }
                } // all other optional parts
                else if (renderOrder[i] == 'tail') {
                    //console.log(chimeraConfigData.legsFullToggled)
                    if (!chimeraConfigData.legsFullToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
                }
                else if (renderOrder[i] == 'hair_back') {
                    if (!chimeraConfigData.headUniqueToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], true)
                }
                else {
                    compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
                }
            }
        }
        else { //guaranteed parts
            if (renderOrder[i] == 'legs_full') { //if legsFullToggled is true, render
                if (chimeraConfigData.legsFullToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
            }
            else if ((renderOrder[i] == 'legs_hips' || renderOrder[i] == 'legs_feet')) { //if legsFullToggled is false, render
                if (!chimeraConfigData.legsFullToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
            }     
            else if (renderOrder[i] == 'muzzle') { //if muzzleToggled is true, render
                if (chimeraConfigData.muzzleToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
            }    
            else if ((renderOrder[i] == 'mouth' || renderOrder[i] == 'nose')) { //if muzzleToggled is false, render
                if (!chimeraConfigData.muzzleToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
            }    
            else if (renderOrder[i] == 'head_unique') { //if 
                if (chimeraConfigData.headUniqueToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
            }    
            else if (renderOrder[i] == 'head') { //if muzzleToggled is false, render
                if (!chimeraConfigData.headUniqueToggled) compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
            }         
            else {
                compiledGraphic += generatePartGrahpic(renderOrder[i], chimeraSVGData[renderOrder[i]]['data'], false)
            }
        }
    }
    chimeraGraphic = compiledGraphic
}

//ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
async function drawChimera() {
    let fpsFactor = 60 / fps
    offsetFactor = (Math.sin(last_frame / (150 * fpsFactor) ) + 1.0)
    if (amplitude > 0.0) {
        amplitude -= 0.24 * fpsFactor
    }
    else {
        amplitude = 0.0
    }
    if (bounceTimer > 0.0) {
        bounceTimer -= 0.1 * fpsFactor
    }
    else {
        bounceTimer = 0.0
    }


    let scale = 1 / (3 - Math.cos(2*last_frame)) * amplitude;
    
    xPos = scale * Math.cos(last_frame) * amplitude;
    yPos = scale * Math.sin(2 * last_frame) / 2 * amplitude;
    
    compileGraphic();

    let xFactor = -Math.sin((2 * Math.PI) * bounceTimer)/32 + 1
    let yFactor =  Math.sin((2 * Math.PI) * bounceTimer)/64 + 1

    img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgElementStart + chimeraGraphic + svgElementEnd);
    img.onload = function() {     
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.save();

        ctx.translate(centerX, centerY)
        ctx.scale(xFactor, yFactor)

        ctx.drawImage(img, -centerX, -centerY, canvas.width, canvas.height);
        
        ctx.restore();
        
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function updateSwatchesToPalette() {
    for (let i = 0; i < layerList.length; i++) {
        let swatch = document.getElementById(layerList[i]);
        let dropSwatches = document.getElementsByClassName(layerList[i] + "_curr");

        swatch.style.backgroundColor = paletteList[chimeraConfigData['paletteIndex']]['data'][layerList[i]]; //chimeraConfigData.palette['data'][layerList[i]];
        for (let j = 0; j < dropSwatches.length; j++) {
            dropSwatches[j].style.backgroundColor = chimeraConfigData['palette']['data'][layerList[i]];
            dropSwatches[j].onclick = function () {
                let targetColor = paletteList[chimeraConfigData['paletteIndex']]['data'][layerList[i]]
                updateSingleSwatch(this, layerList[j], targetColor)
            }
        } 
        document.getElementById("custom_" + layerList[i]).value = paletteList[chimeraConfigData['paletteIndex']]['data'][layerList[i]];
    }
}

function initSideBar2() {
    let select = document.getElementById("paletteSelect");
    for (let i=0; i < paletteList.length; i++) {
        let option = document.createElement('option');
        option.text = paletteList[i].name;
        select.onchange = function() {
            if (typeof(this.selectedIndex) != 'undefined') {
                if (this.selectedIndex % 2  == 0) {
                    let newPaletteIndex = this.selectedIndex/2
                    //console.log("THIS SHOULD BE NEW")
                    chimeraConfigData['palette'] = new Palette(paletteList[newPaletteIndex])
                    chimeraConfigData['paletteIndex'] = newPaletteIndex;
                    //console.log(chimeraConfigData['palette'])
                    updateSwatchesToPalette();
                    amplitude += 2.5
                    if (amplitude > maxAmplitude) 
                        amplitude = maxAmplitude
                    playSound('select', 0.2);
                }
            }
        }

        option.className = "paletteSelectPalette";
        select.add(option);
        let custom = document.createElement('option');
        custom.text = paletteList[i].name + " (Custom)";
        custom.hidden = true;

        custom.className = "paletteSelectPalette";

        select.add(custom); //adds the custom element for whenever we update the palette with colors outside of the regular.
    }

    let paletteContainer = document.getElementById("paletteContainer");

    for (let i = 0; i < layerList.length; i++) {
        let swatch = document.createElement("div");
        swatch.id = layerList[i]
        swatch.style.backgroundColor = paletteList[0]['data'][layerList[i]];
        initSideBar2Display(swatch);
        paletteContainer.appendChild(swatch);
    }

    updateSwatchesToPalette();
    initOtherPaletteSwatches();
}

function initOtherPaletteSwatches() {
    for (let i = 0; i < paletteList.length; i++) {
        let dropSwatches = document.getElementsByClassName(layerList[i] + "_other");
        for (let j = 0; j < dropSwatches.length; j++) {
            let targetLayer = dropSwatches[j].parentElement.parentElement.id
            dropSwatches[j].style.backgroundColor = paletteList[dropSwatches[j].id]['data'][targetLayer] //chimeraConfigData['palette']['data'][layerList[i]];
            //console.log(targetLayer)
            dropSwatches[j].onclick = function () {
                let targetColor = paletteList[dropSwatches[j].id]['data'][dropSwatches[j].parentElement.parentElement.id]
                updateSingleSwatch(this, targetLayer, targetColor)
                //document.getElementById(targetLayer).style.backgroundColor = targetColor;
            }
        }        
    }
}

function updateSingleSwatch(element, targetLayer, targetColor) {
    element.parentElement.parentElement.style.backgroundColor = targetColor
    chimeraConfigData['palette']['data'][targetLayer] = targetColor
    amplitude += 2.5
    if (amplitude > maxAmplitude) 
        amplitude = maxAmplitude
    playSound('select', 0.2);
    if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
        document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
    } 
    document.getElementById("custom_" + targetLayer).value = targetColor;
}

function initSideBar2Display(swatch) {
    swatch.className="paletteSwatch dropdown2";
    let div = document.createElement("div");
    div.className = 'dropdown-content2';
    let name = document.createElement("h1");

    name.innerHTML = niceNames[swatch.id];
    let currPaletteName = document.createElement("h2");
    currPaletteName.innerHTML = "Current Palette";

    div.appendChild(name);
    div.appendChild(currPaletteName);
    for (let i = 0; i < layerList.length; i++) {
        //console.log(paletteList)
        let dropDownSwatch = document.createElement("div");
        dropDownSwatch.className = "dropdownSwatch" + " " + layerList[i] + "_curr";
        //setPaletteColor(dropDownSwatch, palette, getId(i), swatch);
        div.appendChild(dropDownSwatch);
    }

    let otherElementsName = document.createElement("h2");
    otherElementsName.innerHTML = "Other Palettes";
    div.appendChild(otherElementsName);

    for (let i = 0; i < paletteList.length; i++) {
        let dropDownSwatch = document.createElement("div");
        dropDownSwatch.className = "dropdownSwatch2 " + swatch.id + "_other";// + " " + getId(i) + "_curr";
        dropDownSwatch.id = i
        div.appendChild(dropDownSwatch);
    }
    swatch.appendChild(div);
    let customElementName = document.createElement("h2");
    customElementName.innerHTML = "Custom Color";
    div.appendChild(customElementName);

    let customColorSwatch = document.createElement("input");
    customColorSwatch.type = "color"
    customColorSwatch.value = chimeraConfigData.palette.data[swatch.id] //"#FFFFFF"
    customColorSwatch.id = 'custom_' + swatch.id
    customColorSwatch.onchange = function() {
        updateSingleSwatch(this, swatch.id, this.value)
    }
    div.appendChild(customColorSwatch);
}


initSideBarElements()
initSideBar2()
resetSelectedParts()