import {BodyPart,Palette} from "./ChimeraParts.js";
let canvas = document.getElementById("chimera");
let ctx = canvas.getContext("2d");
let oldTimeStamp = 0
// manually set canvas dimension attributes in here
canvas.setAttribute('width', '600');
canvas.setAttribute('height', '800');

let img = new Image();
let chimeraGraphic = ""
let amplitude = 0.0;
let maxAmplitude = 10.0;

// 12 fps = 83.333 MS - 17 MS / 2 = ~75 ms
const callBackMS = 17 //approximately 17 ms for function callback
function getMSFromFPS(fps) {
    return 1000 / fps - callBackMS / 2;
}
//last timestamp
var last = Date.now();
requestAnimationFrame(function tick() {
    if (Date.now() - last >= getMSFromFPS(24)) { 
        if (amplitude > 0.0) {
            amplitude -= 0.1
        }
        else {
            amplitude = 0
        }
        xPos = Math.sin(Date.now() / 500) * amplitude;
        yPos = (Math.sin(Date.now() / 500) * Math.cos(Date.now() / 500)) * amplitude;
        compileGraphic();
        drawChimera();
        last = Date.now();
    }
    requestAnimationFrame(tick);
});


let xPos = 0.0
let yPos = 0.0
/*
//theoretical render loop, but it gets pissy about memory after a while
window.onload = function () {
    compileGraphic();
    drawChimera();
    window.requestAnimationFrame(
        (timeStamp) => {
            renderLoop(timeStamp)
        }
    );
}

function renderLoop(timeStamp) {
    // Calculate how much time has passed
    oldTimeStamp = timeStamp;
    console.log(oldTimeStamp / 1000)
    if (parseInt(oldTimeStamp / 1000) == 0) {
        compileGraphic();
    } 

    window.requestAnimationFrame(
        (timeStamp) => renderLoop(timeStamp)
    );
}*/

const sounds = {
    "shuffle": new Audio('sounds/shuffle.ogg')
}

const svgElementStart = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"\nwidth="1200.000000pt" height="1600.000000pt" viewBox="0 0 1200.000000 1600.000000"\n preserveAspectRatio="xMidYMid meet">'
const svgElementEnd = '</svg>'
const renderOrder = ['hair_back', 'wings', 'tail', 'legs_feet', 'legs_hips', 'legs_full', 'torso', 'neck', 'arms', 'shoulders', 'ears', 'head', 'nose', 'mouth', 'eyes', 'horns', 'hair_front', 'horns_front']
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
    sounds[sound].currentTime = 0
    sounds[sound].play();
}

$('button.randomize').on('click', function() {
    playSound('shuffle', 0.2);
    randomize();
    updateSwatchesToPalette();
    compileGraphic();
    drawChimera();
    amplitude += 0.5
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
    legsFullToggled: false, //keeping this separate as this is the only one with weird logic
    legsFullToggleChance: 0.20, //enabled 20% of the time
}

//if 'enabled' is a key it is marked as optional during randomization, add the chance for it to be enabled out of 1, which is 100%
let chimeraSVGData = {
    wings: { data: new BodyPart(getListIndex('wings', 'base')), enabled: false, chance: 0.50 },
    tail: { data: new BodyPart(getListIndex('tail', 'base')), enabled: false, chance: 0.50},
    legs_feet: { data: new BodyPart(getListIndex('legs_feet', 'base')),},
    legs_hips: { data: new BodyPart(getListIndex('legs_hips', 'base')),},
    legs_full: { data: new BodyPart(getListIndex('legs_full', 'base')),},
    torso: { data: new BodyPart(getListIndex('torso', 'base')),},
    arms: { data: new BodyPart(getListIndex('arms', 'base')),},
    neck: { data: new BodyPart(getListIndex('neck', 'base')),},
    shoulders: { data: new BodyPart(getListIndex('shoulders', 'base')),},
    ears: { data: new BodyPart(getListIndex('ears', 'base')), enabled: true, chance: 0.75},
    head: { data: new BodyPart(getListIndex('head', 'base')),},
    nose: { data: new BodyPart(getListIndex('nose', 'base')),},
    mouth: { data: new BodyPart(getListIndex('mouth', 'base')),},
    eyes: { data: new BodyPart(getListIndex('eyes', 'base')),},
    hair_front: { data: new BodyPart(getListIndex('hair_front', 'default')), enabled: true, chance: 0.85},
    hair_back: { data: new BodyPart(getListIndex('hair_back', 'longer')), enabled: true, chance: 0.85},
    horns: { data: new BodyPart(getListIndex('horns', 'base')), enabled: false, chance: 0.50},
    horns_front: { data: new BodyPart(getListIndex('horns_front', 'base')), enabled: false, chance: 0.50},
};

function initSideBarElements() {
    for (let i = 0; i < renderOrder.length; i++) {
        let parts = partsList[renderOrder[i]]
        let div = document.createElement('div'); //creates the divider
        let img = document.createElement('img'); //creates the image
        img.src = 'icons/' + renderOrder[i] + '.png';
        let src = document.getElementById('partContainer');
        div.className = 'dropdown';
        div.appendChild(img);

        let div2 = document.createElement('div'); //creates the divider
        div2.className = 'dropdown-content';
        for (let j = 0; j < parts.length; j++) {
            let button = document.createElement('button'); //creates the button
            button.className = "update_part"
            button.onclick = function(){
                updatePartType(renderOrder[i], parts[j]);
            };
            let buttonText = document.createTextNode(parts[j]['partName']);
            button.appendChild(buttonText);
            div2.appendChild(button);
        }
        if ("enabled" in chimeraSVGData[renderOrder[i]]) { //if the part has an enabled key, randomize
            let disableButton = document.createElement('button'); //creates the button
            disableButton.className = "update_part"
            disableButton.onclick = function(){
                updatePartType(renderOrder[i], null);
            };
            let disableButtonText = document.createTextNode("None");
            disableButton.appendChild(disableButtonText);
            div2.appendChild(disableButton);
        }
        div.appendChild(div2);
        src.appendChild(div);
    }
}

initSideBarElements()

function updatePartType(partString, partType) {
    if (partType) {
        if (partString == 'legs_full'){
            chimeraConfigData['legsFullToggled'] = true
        }
        else if (partString == 'legs_hips' || partString == 'legs_feet' || partString == 'tail') {
            chimeraConfigData['legsFullToggled'] = false
        }
        chimeraSVGData[partString]['data'] = new BodyPart(partType)
        if ("enabled" in chimeraSVGData[partString]) { //if the part has an enabled key, randomize
            chimeraSVGData[partString]['enabled'] = true
        }
    } 
    else {
        chimeraSVGData[partString]['enabled'] = false
    }
    
    //console.log(chimeraSVGData[partString]['data'])
    compileGraphic();
    drawChimera();
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
    chimeraConfigData['legsFullToggled'] = Math.random() <= chimeraConfigData['legsFullToggleChance'] ? true : false; // enabled 80% of the time
    for (const [key, value] of Object.entries(chimeraSVGData)) {
        chimeraSVGData[key]['data'] = new BodyPart(partsList[key][getRandomNumber(partsList[key].length)])
        if ("enabled" in chimeraSVGData[key]) { //if the part has an enabled key, randomize
            chimeraSVGData[key]['enabled'] = Math.random() <= chimeraSVGData[key]['chance'] ? true : false; // enabled 50% of the time
        }
    } //just for consistency ig? looks weird with only back enabled and not front
    if (chimeraSVGData['hair_back']['enabled']) {
        chimeraSVGData['hair_front']['enabled'] = true;
    }
    document.getElementById("paletteSelect").value = paletteList[paletteIndex]['name'];
}

function generatePartGrahpic(part, altEnabled) {
    let graphic = ""
    for (let i = 0; i < part.maskOrder.length; i++) {
        let data = part[!altEnabled ? 'svgData' : 'svgDataAlt'][i]
        if (altEnabled && data == "") { //if no alt data present, set to original
            data = part['svgData'][i]
        }
        const fillRegex = /fill="#[0-9a-fA-F]{6}"/
        //replace whatever is in the g element fill field with data from the palette, based on its layer (mask order)
        if (part.maskOrder[i] != 'line') {
            data = data.replace(fillRegex, 'fill="' + chimeraConfigData.palette['data'][part.maskOrder[i]] + '"')
        }
        const graphicsRegex = /<g[\s\S]*<\/g>/
        //create a string of graphics to prevent out-of-order svg loading, and wrap the graphic data in an extra graphic layer to allow us to theoretically animate it. maybe
        let wrapper = '<g transform="translate(' + xPos + ',' + yPos + ')">\n' + data.match(graphicsRegex) + '\n</g>'
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
                        compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], true)
                    } else {
                        compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], false)
                    }
                } // all other optional parts
                else if (renderOrder[i] == 'tail') {
                    //console.log(chimeraConfigData.legsFullToggled)
                    if (!chimeraConfigData.legsFullToggled) compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], false)
                }
                else {
                    compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], false)
                }
            }
        }
        else { //guaranteed parts
            if (renderOrder[i] == 'legs_full') { //if legsFullToggled is true, render
                if (chimeraConfigData.legsFullToggled) compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], false)
            }
            else if ((renderOrder[i] == 'legs_hips' || renderOrder[i] == 'legs_feet')) { //if legsFullToggled is false, render
                if (!chimeraConfigData.legsFullToggled) compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], false)
            }     
            else {
                compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], false)
            }
        }
    }
    chimeraGraphic = compiledGraphic
}

async function drawChimera() {
    img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgElementStart + chimeraGraphic + svgElementEnd);
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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
                    compileGraphic()
                    drawChimera()  
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
    compileGraphic()
    drawChimera();
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

initSideBar2()