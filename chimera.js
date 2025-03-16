import {BodyPart,Palette} from "./ChimeraParts.js";
let canvas = document.getElementById("chimera");
let ctx = canvas.getContext("2d");

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

$('button.randomize').on('click', function() {
    randomize();
    updateSwatchesToPalette();
    drawChimera();
});

$('button.openbtn').on('click', function() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.className == "collapsed") {
        sidebar.style.transform = "translateX(0)";
        sidebar.className = "extended";
    } else {
        sidebar.style.transform = "translateX(-100%)";
        sidebar.className = "collapsed";
    }
});

$('button.openbtn2').on('click', function() {
    let sidebar = document.getElementById("sidebar2");
    if (sidebar.className == "collapsed") {
        sidebar.style.transform = "translateX(0)";
        sidebar.className = "extended";
    } else {
        sidebar.style.transform = "translateX(100%)";
        sidebar.className = "collapsed";
    }
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
        let src = document.getElementById('container2');
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
        else if (partString == 'legs_hips' || partString == 'legs_feet') {
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
    //console.log(mask)
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
        //create a string of graphics to prevent out-of-order svg loading
        graphic += data.match(graphicsRegex)
    }
    return graphic
}


drawChimera()

async function drawChimera() {
    //console.log(chimeraSVGData)
    let compiledGraphic = ""
    for (let i = 0; i < renderOrder.length; i++) {
        //console.log(chimeraSVGData[renderOrder[i]])
        if ("enabled" in chimeraSVGData[renderOrder[i]]) { //optional parts
            if (chimeraSVGData[renderOrder[i]]['enabled']) {
                if (renderOrder[i] == 'hair_front') { //if horns are enabled, render the alt for hair front
                    if (chimeraSVGData['horns_front']['enabled']) {
                        compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], true)
                    } else {
                        compiledGraphic += generatePartGrahpic(chimeraSVGData[renderOrder[i]]['data'], false)
                    }
                } // all other optional parts
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
    let img = new Image();
    img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgElementStart + compiledGraphic + svgElementEnd);
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
                //console.log(targetColor)
                document.getElementById(layerList[j]).style.backgroundColor = targetColor;
                chimeraConfigData['palette']['data'][layerList[j]] = targetColor 
                //console.log(chimeraConfigData['palette'])
                drawChimera();
                document.getElementById("paletteSelect").value = chimeraConfigData['palette']['name'] + " (Custom)";
            }
        }        
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
                    //drawChimera()                 
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
                document.getElementById(targetLayer).style.backgroundColor = targetColor;
                chimeraConfigData['palette']['data'][targetLayer] = targetColor 
                drawChimera();
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }        
    }
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
    customColorSwatch.value = "#FFFFFF"
    customColorSwatch.id = swatch.id
    customColorSwatch.onchange = function() {
        console.log(this.value)
        console.log("hello?")
        console.log(this.id)
        if (typeof(this.selectedIndex) != 'undefined') {
            console.log(this.selectedIndex)
        }
        let targetLayer = this.id
        this.parentElement.parentElement.style.backgroundColor = this.value
        chimeraConfigData['palette']['data'][targetLayer] = this.value
        if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
            document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
        }
        drawChimera();
    }
    div.appendChild(customColorSwatch);
}

initSideBar2()