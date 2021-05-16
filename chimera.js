//import {wings, tail, hair_back, legs_feet, legs_hips, legs_full, torso, neck, arms, shoulders, ears, head, nose, mouth, eyes, horns, hair_front} from './variables.js';
//[skin1, skin2, scale1, fur1, fur2, sclera, iris, color] for z order

// REMINDER FOR THE SAKE OF ORGANIZATION I GUESS -- Discriptive pieces> Species pieces> OC pieces

//body parts
const blank = 'images/_blank/blank.png';
const wings = [ //wings have a chance of being replaced by blanks
    {
        name: 'Temp Wings',
        type: 'temp',
        url: 'images/wings/temp/',
        mask: ['skin2','scale1']
    },
    {
        name: 'Angel Wings',
        type: 'angel',
        url: 'images/wings/angel/',
        mask: ['fur1']
    },
    {
        name: 'Wasp Wings',
        type: 'wasp',
        url: 'images/wings/wasp/',
        mask: ['scale1','skin2']
    },
];
const tail = [
    {
        name: 'Cat Tail',
        type: 'cat',
        url: 'images/tail/cat/',
        mask: ['fur1']
    },
    {
        name: 'Bird Tail',
        type: 'bird',
        url: 'images/tail/bird/',
        mask: ['fur1','fur2']
    },
    {
        name: 'Kobold Tail',
        type: 'kobold',
        url: 'images/tail/kobold/',
        mask: ['skin2','scale1']
    }
];
const hair_back = [
    {
        name: 'Bulb Hair',
        type: 'bulb',
        url: 'images/hair_back/bulb/',
        mask: ['color']
    },
    {
        name: 'Long Hair',
        type: 'long',
        url: 'images/hair_back/long/',
        mask: ['color']
    },
    {
        name: 'Longer Hair',
        type: 'long',
        url: 'images/hair_back/longer/',
        mask: ['color']
    },
    {
        name: 'Longest Hair',
        type: 'long',
        url: 'images/hair_back/longest/',
        mask: ['color']
    },
    {
        name: 'Wild Hair',
        type: 'wild',
        url: 'images/hair_back/wild/',
        mask: ['color']
    },
    {
        name: 'Santr Hair',
        type: 'santr',
        url: 'images/hair_back/santr/',
        mask: ['color']
    },
    {
        name: 'Iban Hair',
        type: 'iban',
        url: 'images/hair_back/iban/',
        mask: ['color']
    }
];
const legs_feet = [
    {
        name: 'Base Feet',
        type: 'base',
        url: 'images/legs_feet/base/',
        mask: ['skin1']
    },
    {
        name: 'Horse Feet',
        type: 'horse',
        url: 'images/legs_feet/horse/',
        mask: ['fur1']
    },
    {
        name: 'Kobold Feet',
        type: 'kobold',
        url: 'images/legs_feet/kobold/',
        mask: ['scale1']
    },
    {
        name: 'Tiger Feet',
        type: 'tiger',
        url: 'images/legs_feet/tiger/',
        mask: ['fur1']
    },
    {
        name: 'Santr Feet',
        type: 'santr',
        url: 'images/legs_feet/santr/',
        mask: ['skin2']
    },
    {
        name: 'Iban Feet',
        type: 'iban',
        url: 'images/legs_feet/iban/',
        mask: ['scale1']
    },
];
const legs_hips = [
    {
        name: 'Base Hips',
        type: 'base',
        url: 'images/legs_hips/base/',
        mask: ['skin1']
    },
    {
        name: 'Curvy Hips',
        type: 'base', //since curvy just seems to be a variant for base skin tone, set the type to base
        url: 'images/legs_hips/curvy/',
        mask: ['skin1']
    },
    {
        name: 'Fur Hips',
        type: 'fur',
        url: 'images/legs_hips/fur/',
        mask: ['fur2','fur1']
    },
    {
        name: 'Kobold Hips',
        type: 'kobold',
        url: 'images/legs_hips/kobold/',
        mask: ['scale1','skin2']
    },
    {
        name: 'Sheep Hips',
        type: 'sheep',
        url: 'images/legs_hips/sheep/',
        mask: ['skin1','fur1']
    },
    {
        name: 'Santr Hips',
        type: 'santr',
        url: 'images/legs_hips/santr/',
        mask: ['fur2','fur1']
    },
];
const legs_full = [
    {
        name: 'Naga Lower Body',
        type: 'naga',
        url: 'images/legs_full/naga/',
        mask: ['skin2','scale1']
    },
    {
        name: 'Arachne Lower Body',
        type: 'arachne',
        url: 'images/legs_full/arachne/',
        mask: ['fur1','scale1']
    },
];
const torso = [
    {
        name: 'Base Torso',
        type: 'base',
        url: 'images/torso/base/',
        mask: ['skin1']
    },
    {
        name: 'Kobold Torso',
        type: 'kobold',
        url: 'images/torso/kobold/',
        mask: ['skin2','scale1']
    },
    {
        name: 'Dog Torso',
        type: 'dog',
        url: 'images/torso/dog/',
        mask: ['fur2','fur1']
    },
    {
        name: 'Santr Torso',
        type: 'santr',
        url: 'images/torso/santr/',
        mask: ['fur2','fur1']
    },
    {
        name: 'Iban Torso',
        type: 'iban',
        url: 'images/torso/iban/',
        mask: ['skin1','scale1']
    }
];
const neck = [
    {
        name: 'Base Neck',
        type: 'base',
        url: 'images/neck/base/',
        mask: ['skin1']
    },
    {
        name: 'Fur Neck',
        type: 'fur',
        url: 'images/neck/fur/',
        mask: ['fur1']
    },
    {
        name: 'Fluffy Neck',
        type: 'fluffy',
        url: 'images/neck/fluffy/',
        mask: ['fur1','fur2']
    },
    {
        name: 'Kobold Neck',
        type: 'kobold',
        url: 'images/neck/kobold/',
        mask: ['skin2','scale1']
    }
];
const arms = [ //(includes hands)
    {
        name: 'Base Arms',
        type: 'base',
        url: 'images/arms/base/',
        mask: ['skin1']
    },
    {
        name: 'Oni Arms',
        type: 'oni',
        url: 'images/arms/oni/',
        mask: ['skin1','scale1']
    },
    {
        name: 'Arachne Arms',
        type: 'arachne',
        url: 'images/arms/arachne/',
        mask: ['scale1']
    },
    {
        name: 'Cat Arms',
        type: 'cat',
        url: 'images/arms/cat/',
        mask: ['skin2','fur1']
    },
    {
        name: "Owl Arms",
        type: "owl",
        url: "images/arms/owl/",
        mask: ['skin2','fur1']
    },
    {
        name: 'Santr Arms',
        type: 'santr',
        url: 'images/arms/santr/',
        mask: ['fur2','fur1']
    },
    {
        name: 'Kobold Arms',
        type: 'kobold',
        url: 'images/arms/kobold/',
        mask: ['skin2','scale1']
    },
];
const shoulders = [
    {
        name: 'Base Shoulders',
        type: 'base',
        url: 'images/shoulders/base/',
        mask: ['skin1']
    },
    {
        name: 'Dog Shoulders',
        type: 'dog',
        url: 'images/shoulders/dog/',
        mask: ['fur1']
    },
    {
        name: 'Sheep Shoulders',
        type: 'sheep',
        url: 'images/shoulders/sheep/',
        mask: ['skin1','fur1']
    },
    {
        name: 'Iban Shoulders',
        type: 'iban',
        url: 'images/shoulders/iban/',
        mask: ['skin1','scale1']
    },
    {
        name: 'Kobold Shoulders',
        type: 'kobold',
        url: 'images/shoulders/kobold/',
        mask: ['scale1']
    }
];
const ears = [
    {
        name: 'Base Ears',
        type: 'base',
        url: 'images/ears/base/',
        mask: ['skin1']
    },
    {
        name: 'Bunny Ears',
        type: 'bunny',
        url: 'images/ears/bunny/',
        mask: ['fur1','fur2']
    },
    {
        name: 'Kobold Ears',
        type: 'kobold',
        url: 'images/ears/kobold/',
        mask: ['scale1']
    },
    {
        name: 'Lynx Ears',
        type: 'lynx',
        url: 'images/ears/lynx/',
        mask: ['fur1','fur2']
    },
    {
        name: 'Rat Ears',
        type: 'rat',
        url: 'images/ears/rat/',
        mask: ['skin2', 'fur1']
    }
];
const head = [
    {
        name: 'Base Head',
        type: 'base',
        url: 'images/head/base/',
        mask: ['skin1']
    },
    {
        name: 'Kobold Head',
        type: 'kobold',
        url: 'images/head/kobold/',
        mask: ['scale1']
    },
    {
        name: 'Fur Head',
        type: 'fur',
        url: 'images/head/fur/',
        mask: ['fur1','fur2']
    },
    {
        name: 'Shark Head',
        type: 'shark',
        url: 'images/head/shark/',
        mask: ['skin2']
    }
];
const nose = [
    {
        name: 'Base Nose',
        type: 'base',
        url: 'images/nose/base/',
        mask: []
    },
    {
        name: 'Bunny Nose',
        type: 'bunny',
        url: 'images/nose/bunny/',
        mask: []
    },
    {
        name: 'Tiger Nose',
        type: 'tiger',
        url: 'images/nose/tiger/',
        mask: ['skin2']
    },
    {
        name: 'Rat Nose',
        type: 'rat',
        url: 'images/nose/rat/',
        mask: ['skin2']
    },
    {
        name: 'Dog Nose',
        type: 'dog',
        url: 'images/nose/dog/',
        mask: ['skin2']
    },
    {
        name: 'Iban Nose',
        type: 'iban',
        url: 'images/nose/iban/',
        mask: []
    },
    {
        name: 'Kobold Nose',
        type: 'kobold',
        url: 'images/nose/kobold/',
        mask: []
    }
];
const mouth = [
    {
        name: 'Base Mouth',
        type: 'base',
        url: 'images/mouth/base/',
        mask: []
    },
    {
        name: 'O Mouth',
        type: 'base', //variations of base mouth i guess
        url: 'images/mouth/o/',
        mask: []
    },
    {
        name: 'V Mouth',
        type: 'base',
        url: 'images/mouth/v/',
        mask: []
    },
    {
        name: 'Teethy Mouth',
        type: 'teethy',
        url: 'images/mouth/teethy/',
        mask: ['skin2']
    },
    {
        name: 'Smug Mouth',
        type: 'smug',
        url: 'images/mouth/smug/',
        mask: []
    },
    {
        name: 'Secretary Mouth',
        type: 'secretary',
        url: 'images/mouth/secretary/',
        mask: ['skin2']
    },
    {
        name: 'Dog Mouth',
        type: 'dog',
        url: 'images/mouth/dog/',
        mask: ['skin2']
    },
    {
        name: 'Cat Mouth',
        type: 'cat',
        url: 'images/mouth/cat/',
        mask: []
    },
    {
        name: 'Kobold Mouth',
        type: 'kobold',
        url: 'images/mouth/kobold/',
        mask: []
    },

    {
        name: 'Mousey Mouth',
        type: 'mousey',
        url: 'images/mouth/mousey/',
        mask: []
    },
    {
        name: 'Santr Mouth',
        type: 'santr',
        url: 'images/mouth/santr/',
        mask: ['fur1','skin2']
    },
    {
        name: 'Iban Mouth',
        type: 'iban',
        url: 'images/mouth/iban/',
        mask: []
    },
];
const eyes = [
    {
        name: 'Base Eyes',
        type: 'base',
        url: 'images/eyes/base/',
        mask: ['sclera','iris']
    },
    {
        name: 'Round Eyes',
        type: 'base', //variation
        url: 'images/eyes/round/',
        mask: ['sclera','iris']
    },
    {
        name: 'Closed Eyes',
        type: 'closed',
        url: 'images/eyes/closed/',
        mask: []
    },
    {
        name: 'Kawaii Eyes',
        type: 'kawaii',
        url: 'images/eyes/kawaii/',
        mask: ['sclera','iris']
    },
  
    {
        name: 'Moth Eyes',
        type: 'moth',
        url: 'images/eyes/moth/',
        mask: ['sclera','iris']
    },
    {
        name: 'Luscious Eyes',
        type: 'luscious',
        url: 'images/eyes/luscious/',
        mask: ['sclera','iris']
    },
    {
        name: 'Santr Eyes',
        type: 'santr',
        url: 'images/eyes/santr/',
        mask: ['sclera','iris','fur2']
    },
    {
        name: 'Iban Eyes',
        type: 'iban',
        url: 'images/eyes/iban/',
        mask: ['sclera']
    },
  
];
const horns = [ //optional
    {
        name: 'Crown Horns',
        type: 'crown',
        url: 'images/horns/crown/',
        mask: ['scale1']
    },
    {
        name: 'Iban Horns',
        type: 'iban',
        url: 'images/horns/iban/',
        mask: ['scale1']
    },
    {
        name: 'Kobold Horns',
        type: 'kobold', //variation
        url: 'images/horns/kobold/',
        mask: ['scale1']
    }
];
const hair_front = [

    {
        name: 'Default Hair',
        type: 'default',
        url: 'images/hair_front/default/',
        mask: ['color']
    },
    {
        name: 'Bow Hair',
        type: 'bow',
        url: 'images/hair_front/bow/',
        mask: ['color']
    },
    {
        name: 'Guile Hair',
        type: 'guile',
        url: 'images/hair_front/guile/',
        mask: ['color']
    },
    {
        name: 'Short Hair',
        type: 'short', //variation
        url: 'images/hair_front/short/',
        mask: ['color']
    }
];
const horns_front = [ //optional
    {
        name: 'Bull Front Horns',
        type: 'bull',
        url: 'images/horns_front/bull/',
        mask: ['skin2']
    },
    {
        name: 'Kobold Front Horns',
        type: 'kobold',
        url: 'images/horns_front/kobold/',
        mask: ['scale1']
    },
    {
        name: 'Unicorn Front Horn',
        type: 'unicorn',
        url: 'images/horns_front/unicorn/',
        mask: ['skin2']
    }
];

//palettes
const palettes = [ //throw hex values in here. include hashtags. //anything under 1.0 is good
    { //default, makes everything its normal color.
        name: "Default",
        skin1: '#676767',
        skin1filter: 'invert(43%) sepia(0%) saturate(1%) hue-rotate(241deg) brightness(90%) contrast(85%)', //0.0 loss
        scale1: '#C2C2C2',
        scale1filter: 'invert(85%) sepia(0%) saturate(35%) hue-rotate(162deg) brightness(94%) contrast(88%)',
        skin2: '#8D8D8D',
        skin2filter: 'invert(62%) sepia(0%) saturate(0%) hue-rotate(161deg) brightness(89%) contrast(91%)',
        fur1: '#424242',
        fur1filter: 'invert(26%) sepia(1%) saturate(0%) hue-rotate(165deg) brightness(82%) contrast(83%)',
        fur2: '#6D6D6D',
        fur2filter: 'invert(45%) sepia(1%) saturate(0%) hue-rotate(135deg) brightness(93%) contrast(91%)',
        sclera: '#FFFFFF',
        sclerafilter: 'invert(100%) sepia(100%) saturate(2%) hue-rotate(263deg) brightness(105%) contrast(101%)',
        iris: '#4D0D0D',
        irisfilter: 'invert(7%) sepia(28%) saturate(7016%) hue-rotate(347deg) brightness(100%) contrast(98%)',
        color: '#777D93',
        colorfilter:'invert(53%) sepia(8%) saturate(802%) hue-rotate(190deg) brightness(90%) contrast(88%)'
    },
    { //Autumn
        name: "Autumn",
        skin1: '#C28B78',
        skin1filter: 'invert(60%) sepia(14%) saturate(896%) hue-rotate(329deg) brightness(97%) contrast(92%)', //
        scale1: '#b15145',
        scale1filter: 'invert(34%) sepia(42%) saturate(715%) hue-rotate(318deg) brightness(105%) contrast(98%)',//
        skin2: '#e8c39e',
        skin2filter: 'invert(75%) sepia(25%) saturate(461%) hue-rotate(343deg) brightness(109%) contrast(82%)', //
        fur1: '#e3a96d',
        fur1filter: 'invert(72%) sepia(34%) saturate(555%) hue-rotate(347deg) brightness(93%) contrast(90%)', //
        fur2: '#bc7d5e',
        fur2filter: 'invert(59%) sepia(44%) saturate(437%) hue-rotate(335deg) brightness(84%) contrast(88%)', //
        sclera: '#f0f0f0',
        sclerafilter: 'invert(98%) sepia(0%) saturate(7437%) hue-rotate(181deg) brightness(112%) contrast(88%)', //
        iris: '#b34f42',
        irisfilter: 'invert(31%) sepia(83%) saturate(603%) hue-rotate(322deg) brightness(98%) contrast(81%)', //
        color: '#e9e5df',
        colorfilter:'invert(95%) sepia(6%) saturate(714%) hue-rotate(319deg) brightness(105%) contrast(83%)' //
    },
    { //Cheese Moon
        name: "Cheese Moon", //????? lol
        skin1: '#817ca7',
        skin1filter: 'invert(50%) sepia(6%) saturate(1611%) hue-rotate(207deg) brightness(100%) contrast(96%)', //
        scale1: '#49538b',
        scale1filter: 'invert(29%) sepia(67%) saturate(380%) hue-rotate(194deg) brightness(97%) contrast(97%)',//
        skin2: '#d3d3f2',
        skin2filter: 'invert(86%) sepia(9%) saturate(827%) hue-rotate(201deg) brightness(100%) contrast(91%)', //
        fur1: '#f0b367',
        fur1filter: 'invert(70%) sepia(98%) saturate(301%) hue-rotate(333deg) brightness(97%) contrast(94%)', //
        fur2: '#ab79a5',
        fur2filter: 'invert(51%) sepia(13%) saturate(1028%) hue-rotate(256deg) brightness(101%) contrast(85%)', //
        sclera: '#e98c85',
        sclerafilter: 'invert(69%) sepia(6%) saturate(3938%) hue-rotate(315deg) brightness(96%) contrast(89%)', //
        iris: '#000000',
        irisfilter: 'invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg) brightness(96%) contrast(104%)', //
        color: '#f0b367',
        colorfilter:'invert(67%) sepia(67%) saturate(324%) hue-rotate(351deg) brightness(99%) contrast(91%)' //
    },
    { //Cotton Candy
        name: "Cotton Candy",
        skin1: '#ffeacb',
        skin1filter: 'invert(89%) sepia(28%) saturate(584%) hue-rotate(312deg) brightness(108%) contrast(104%)', //
        scale1: '#a4b6df',
        scale1filter: 'invert(72%) sepia(67%) saturate(308%) hue-rotate(191deg) brightness(92%) contrast(89%)',//
        skin2: '#defffa',
        skin2filter: 'invert(94%) sepia(54%) saturate(211%) hue-rotate(73deg) brightness(105%) contrast(103%)', //
        fur1: '#cdfceb',
        fur1filter: 'invert(92%) sepia(19%) saturate(342%) hue-rotate(94deg) brightness(103%) contrast(98%)', //
        fur2: '#ffbfda',
        fur2filter: 'invert(76%) sepia(39%) saturate(348%) hue-rotate(295deg) brightness(103%) contrast(101%)', //
        sclera: '#efefef',
        sclerafilter: 'invert(100%) sepia(53%) saturate(16%) hue-rotate(310deg) brightness(113%) contrast(87%)', //
        iris: '#dfc3fc',
        irisfilter: 'invert(76%) sepia(50%) saturate(554%) hue-rotate(202deg) brightness(103%) contrast(98%)', //
        color: '#ffbfda',
        colorfilter:'invert(75%) sepia(57%) saturate(329%) hue-rotate(296deg) brightness(105%) contrast(101%)' //
    },
    { // Red Snow
        name: "Red Snow",
        skin1: '#f4dcd9',
        skin1filter: 'invert(85%) sepia(31%) saturate(153%) hue-rotate(316deg) brightness(102%) contrast(91%)', //
        scale1: '#dbd8dc',
        scale1filter: 'invert(100%) sepia(17%) saturate(1113%) hue-rotate(186deg) brightness(93%) contrast(85%)',//
        skin2: '#d4525e',
        skin2filter: 'invert(44%) sepia(33%) saturate(4819%) hue-rotate(327deg) brightness(93%) contrast(78%)', //
        fur1: '#efefef',
        fur1filter: 'invert(100%) sepia(4%) saturate(652%) hue-rotate(201deg) brightness(113%) contrast(87%)', //
        fur2: '#636363',
        fur2filter: 'invert(38%) sepia(1%) saturate(6%) hue-rotate(314deg) brightness(94%) contrast(78%)', //
        sclera: '#efefef',
        sclerafilter: 'invert(100%) sepia(4%) saturate(652%) hue-rotate(201deg) brightness(113%) contrast(87%)', //
        iris: '#d4525e',
        irisfilter: 'invert(44%) sepia(33%) saturate(4819%) hue-rotate(327deg) brightness(93%) contrast(78%)', //
        color: '#a1edf2',
        colorfilter:'invert(88%) sepia(27%) saturate(454%) hue-rotate(136deg) brightness(97%) contrast(95%)' //
    },
    { // Santr
        name: "Santr",
        skin1: '#5c4a4b',
        skin1filter: 'invert(29%) sepia(9%) saturate(872%) hue-rotate(308deg) brightness(94%) contrast(88%)', //
        scale1: '#463233',
        scale1filter: 'invert(16%) sepia(16%) saturate(1025%) hue-rotate(308deg) brightness(92%) contrast(82%)',//
        skin2: '#322324',
        skin2filter: 'invert(10%) sepia(9%) saturate(2249%) hue-rotate(307deg) brightness(89%) contrast(86%)', //
        fur1: '#d58caf',
        fur1filter: 'invert(73%) sepia(21%) saturate(952%) hue-rotate(291deg) brightness(89%) contrast(87%)', //
        fur2: '#e0b9cc',
        fur2filter: 'invert(89%) sepia(22%) saturate(600%) hue-rotate(287deg) brightness(91%) contrast(92%)', //
        sclera: '#181818',
        sclerafilter: 'invert(0%) sepia(1%) saturate(305%) hue-rotate(320deg) brightness(100%) contrast(81%)', //
        iris: '#ec7b0c',
        irisfilter: 'invert(58%) sepia(17%) saturate(2544%) hue-rotate(350deg) brightness(91%) contrast(104%)', //
        color: '#d58caf',
        colorfilter:'invert(73%) sepia(21%) saturate(952%) hue-rotate(291deg) brightness(89%) contrast(87%)' //
    },
    { // Iban
        name: "Iban",
        skin1: '#f3c6b9',
        skin1filter: 'invert(95%) sepia(39%) saturate(6596%) hue-rotate(292deg) brightness(116%) contrast(91%)', //
        scale1: '#a8423d',
        scale1filter: 'invert(35%) sepia(12%) saturate(2888%) hue-rotate(314deg) brightness(92%) contrast(95%)',//
        skin2: '#ffe4d7',
        skin2filter: 'invert(98%) sepia(70%) saturate(671%) hue-rotate(296deg) brightness(99%) contrast(104%)', //
        fur1: '#383060',
        fur1filter: 'invert(18%) sepia(21%) saturate(1869%) hue-rotate(211deg) brightness(92%) contrast(88%)', //
        fur2: '#1a142d',
        fur2filter: 'invert(7%) sepia(9%) saturate(6408%) hue-rotate(223deg) brightness(93%) contrast(96%)', //
        sclera: '#f0f0f0',
        sclerafilter: 'invert(99%) sepia(0%) saturate(283%) hue-rotate(42deg) brightness(116%) contrast(88%)', //
        iris: '#000000',
        irisfilter: 'invert(0%) sepia(0%) saturate(22%) hue-rotate(34deg) brightness(93%) contrast(105%)', //
        color: '#383060',
        colorfilter:'invert(18%) sepia(21%) saturate(1869%) hue-rotate(211deg) brightness(92%) contrast(88%)' //
    },
    { // Art Pop
        name: "Art Pop",
        skin1: '#ebc094',
        skin1filter: 'invert(80%) sepia(38%) saturate(419%) hue-rotate(335deg) brightness(98%) contrast(88%)', //
        scale1: '#2c303d',
        scale1filter: 'invert(15%) sepia(27%) saturate(487%) hue-rotate(188deg) brightness(93%) contrast(90%)',
        skin2: '#dfdfdf',
        skin2filter: 'invert(100%) sepia(0%) saturate(2351%) hue-rotate(315deg) brightness(110%) contrast(75%)', //
        fur1: '#ebc842',
        fur1filter: 'invert(88%) sepia(87%) saturate(852%) hue-rotate(325deg) brightness(102%) contrast(84%)', //
        fur2: '#ff6f80',
        fur2filter: 'invert(58%) sepia(25%) saturate(4233%) hue-rotate(315deg) brightness(109%) contrast(101%)', //
        sclera: '#ffffff',
        sclerafilter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(109deg) brightness(105%) contrast(105%)', //
        iris: '#42ebd0',
        irisfilter: 'invert(71%) sepia(75%) saturate(359%) hue-rotate(115deg) brightness(96%) contrast(98%)', //
        color: '#94ddde',
        colorfilter:'invert(98%) sepia(100%) saturate(905%) hue-rotate(153deg) brightness(94%) contrast(85%)' //
    },


    { //made the test palette not suck and rebranded it
        name: "Tundra",
        skin1: '#EBCAA4',
        skin1filter: 'invert(88%) sepia(14%) saturate(879%) hue-rotate(335deg) brightness(99%) contrast(86%)', //0.1 loss
        scale1: '#CABA97',
        scale1filter: 'invert(79%) sepia(23%) saturate(323%) hue-rotate(3deg) brightness(91%) contrast(91%)',//0.1 loss
        skin2: '#A08775',
        skin2filter: 'invert(59%) sepia(12%) saturate(669%) hue-rotate(342deg) brightness(91%) contrast(86%)', //0.1 loss
        fur1: '#B2C7CB',
        fur1filter: 'invert(86%) sepia(25%) saturate(143%) hue-rotate(142deg) brightness(89%) contrast(85%)', //0.1 loss
        fur2: '#E6F8F8',
        fur2filter: 'invert(89%) sepia(26%) saturate(103%) hue-rotate(126deg) brightness(107%) contrast(95%)', //0.1 loss
        sclera: '#E7FDFD',
        sclerafilter: 'invert(95%) sepia(5%) saturate(1843%) hue-rotate(171deg) brightness(107%) contrast(98%)', //0.5 loss
        iris: '#74E9E3',
        irisfilter: 'invert(85%) sepia(47%) saturate(407%) hue-rotate(112deg) brightness(94%) contrast(93%)', //0.7 loss
        color: '#927160',
        colorfilter:'invert(46%) sepia(9%) saturate(1297%) hue-rotate(336deg) brightness(97%) contrast(83%)' //0.2 loss
    },
    { // i got bored and needed a break :weary:
        name: "Aurora",
        skin1: '#9fd1c3',
        skin1filter: 'invert(91%) sepia(5%) saturate(2265%) hue-rotate(95deg) brightness(110%) contrast(64%)', //
        scale1: '#9dbebf',
        scale1filter: 'invert(84%) sepia(6%) saturate(928%) hue-rotate(133deg) brightness(87%) contrast(89%)',//
        skin2: '#40646f',
        skin2filter: 'invert(33%) sepia(43%) saturate(342%) hue-rotate(147deg) brightness(97%) contrast(91%)', //
        fur1: '#2A3444',
        fur1filter: 'invert(16%) sepia(33%) saturate(542%) hue-rotate(178deg) brightness(93%) contrast(89%)', //
        fur2: '#24586d',
        fur2filter: 'invert(29%) sepia(18%) saturate(1549%) hue-rotate(152deg) brightness(93%) contrast(87%)', //
        sclera: '#16042a',
        sclerafilter: 'invert(4%) sepia(44%) saturate(7483%) hue-rotate(267deg) brightness(73%) contrast(102%)', //
        iris: '#c472b9',
        irisfilter: 'invert(55%) sepia(22%) saturate(941%) hue-rotate(257deg) brightness(93%) contrast(92%)', //
        color: '#292947',
        colorfilter:'invert(12%) sepia(8%) saturate(4214%) hue-rotate(202deg) brightness(101%) contrast(88%)' //
    }

    /*,
    {
        skin1: '',
        skin1filter: '', //
        scale1: '',
        scale1filter: '',//
        skin2: '',
        skin2filter: '', //
        fur1: '',
        fur1filter: '', //
        fur2: '',
        fur2filter: '', //
        sclera: '',
        sclerafilter: '', //
        iris: '',
        irisfilter: '', //
        color: '',
        colorfilter:'' //
    }*/
];

function toggleNav() {
    //console.log(document.getElementById("sidebar").style.width);
    if ((document.getElementById("sidebar").style.width == "0px")||(document.getElementById("sidebar").style.width == "")) {
        //console.log("sidebar width was 0.");
        document.getElementById("sidebar").style.width = "32%";
        document.getElementById("sidebar").style.minWidth = "205px";
        
    }
    else {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("sidebar").style.minWidth = "0px";
        
    }
}

function toggleNav2() {
    //console.log(document.getElementById("sidebar").style.width);
    if ((document.getElementById("sidebar2").style.width == "0px")||(document.getElementById("sidebar2").style.width == "")) {
        //console.log("sidebar width was 0.");
        document.getElementById("sidebar2").style.width = "30%";
        document.getElementById("sidebar2").style.minWidth = "200px";
    }
    else {
        document.getElementById("sidebar2").style.width = "0px";
        document.getElementById("sidebar2").style.minWidth = "0px";
    }
}


$(document).ready(() => {
    $('button.randomize').click(() => {
        //console.log("randomize me daddy");
        //wings
        if ((Math.floor(Math.random() * 2)) >= 1) {//1/2 chance for wings vs no wings
            //console.log("wings!");
            const wingIndex = Math.floor(Math.random() * wings.length);
            //console.log(wingIndex);
            setElementBody(wings[wingIndex].url, 'wings', wings[wingIndex].mask, wings[wingIndex].type);
        } else {
            //console.log("no wings.");
            unsetElementBody('wings');
        }
        //tail
        let tailEnabled;
        if ((Math.floor(Math.random() * 2)) >= 1) {//1/2 chance for tail vs no tail
            tailEnabled = true;
            //console.log("tail!");
            const tailIndex = Math.floor(Math.random() * tail.length);
            //console.log(wingIndex);
            setElementBody(tail[tailIndex].url, 'tail', tail[tailIndex].mask, tail[tailIndex].type);
        } else {
            tailEnabled = false;
            //console.log("no tail.");
            unsetElementBody('tail');

        }
        //hair_back
        let hairEnabled;
        if ((Math.floor(Math.random() * 10)) <= 8) {//1/10 chance for no hair
            hairEnabled = true;
            const hair_backIndex = Math.floor(Math.random() * hair_back.length);
            //console.log(hair_backIndex);
            setElementHair(hair_back[hair_backIndex].url, 'hair_back', hair_back[hair_backIndex].mask, hair_back[hair_backIndex].type);
        }

        //legs
        if (((Math.floor(Math.random() * 2)) >= 1) && (tailEnabled == false)) {//1/2 chance for full legs. tail must be disabled as well
            unsetElementBody('legs_feet');
            unsetElementBody('legs_hips');
            setClassBody('tail', 'full');
            setClassBody('legs_feet', 'full');
            setClassBody('legs_hips', 'full');
            setClassBody('legs_full', 'full');
            const fullIndex = Math.floor(Math.random() * legs_full.length);
            setElementBody(legs_full[fullIndex].url, 'legs_full', legs_full[fullIndex].mask, legs_full[fullIndex].type);
        } else {
            const feetIndex = Math.floor(Math.random() * legs_feet.length);
            const hipsIndex = Math.floor(Math.random() * legs_hips.length);
            setElementBody(legs_feet[feetIndex].url, 'legs_feet', legs_feet[feetIndex].mask, legs_feet[feetIndex].type);
            setElementBody(legs_hips[hipsIndex].url, 'legs_hips', legs_hips[hipsIndex].mask, legs_hips[hipsIndex].type);
            setClassBody('tail', 'notFull');
            setClassBody('legs_feet', 'notFull');
            setClassBody('legs_hips', 'notFull');
            setClassBody('legs_full', 'notFull');
            unsetElementBody('legs_full');
        }
        //torso
        const torsoIndex = Math.floor(Math.random() * torso.length);
        setElementBody(torso[torsoIndex].url, 'torso', torso[torsoIndex].mask, torso[torsoIndex].type);
        //neck
        const neckIndex = Math.floor(Math.random() * neck.length);
        setElementBody(neck[neckIndex].url, 'neck', neck[neckIndex].mask, neck[neckIndex].type);
        //arms
        const armsIndex = Math.floor(Math.random() * arms.length);
        setElementBody(arms[armsIndex].url, 'arms', arms[armsIndex].mask, arms[armsIndex].type);
        //shoulders
        const shouldersIndex = Math.floor(Math.random() * shoulders.length);
        setElementBody(shoulders[shouldersIndex].url, 'shoulders', shoulders[shouldersIndex].mask, shoulders[shouldersIndex].type);
        //ears

        if ((Math.floor(Math.random() * 20)) <= 18) {//1/20 chance for no ears
            const earsIndex = Math.floor(Math.random() * ears.length);
            setElementBody(ears[earsIndex].url, 'ears', ears[earsIndex].mask, ears[earsIndex].type);
        }
        else {
            unsetElementBody('ears');
        }
        //head
        const headIndex = Math.floor(Math.random() * head.length);
        setElementBody(head[headIndex].url, 'head', head[headIndex].mask, head[headIndex].type);
        //nose
        const noseIndex = Math.floor(Math.random() * nose.length);
        setElementBody(nose[noseIndex].url, 'nose', nose[noseIndex].mask, nose[noseIndex].type);
        //mouth
        const mouthIndex = Math.floor(Math.random() * mouth.length);
        setElementBody(mouth[mouthIndex].url, 'mouth', mouth[mouthIndex].mask, mouth[mouthIndex].type);
        //eyes
        const eyesIndex = Math.floor(Math.random() * eyes.length);
        setElementEyes(eyes[eyesIndex].url, 'eyes', eyes[eyesIndex].mask, eyes[eyesIndex].type);

        //horns
        if ((Math.floor(Math.random() * 2)) >= 1) {//1/2 chance for horns
            const hornsIndex = Math.floor(Math.random() * horns.length);
            setElementBody(horns[hornsIndex].url, 'horns', horns[hornsIndex].mask, horns[hornsIndex].type);
        } else {
            //console.log("no wings.");
            unsetElementBody('horns');
        }
        //hair_front
        let horns_frontEnabled = ((Math.floor(Math.random() * 2)) >= 1); //if horns are enabled, we set hair to be its alt.
        if (!hairEnabled && horns_frontEnabled) {//edge case
            setClassBody('horns_front', 'hornsFront');
            setClassHair('hair_front', 'hornsFront');
        }
        if (hairEnabled) {
            const hair_frontIndex = Math.floor(Math.random() * hair_front.length);
            setElementHairFront(hair_front[hair_frontIndex].url, 'hair_front', hair_front[hair_frontIndex].mask, hair_front[hair_frontIndex].type,horns_frontEnabled);
        } else {
            unsetElementHair('hair_front');
            unsetElementHair('hair_back');
        }
        if (horns_frontEnabled) {//1/2 chance
            const horns_frontIndex = Math.floor(Math.random() * horns_front.length);
            setElementBody(horns_front[horns_frontIndex].url, 'horns_front', horns_front[horns_frontIndex].mask, horns_front[horns_frontIndex].type);
        } else {
            //console.log("no wings.");
            unsetElementBody('horns_front');
        }


        const paletteIndex = Math.floor(Math.random() * (palettes.length - 1)) + 1; //so we never trigger the default gray palette on random
        setPalette(palettes[paletteIndex]);
        updateSwatchesToPalette(palettes[paletteIndex]);
        document.getElementById("paletteSelect").value = palettes[paletteIndex].name;
    });
});

//passes in the elemId and mask array so we can find which masks to turn on/off
function setElementBody(url, elemId, mask, type) {
    //elemId+ '_' + mask = id
    if (mask.includes('skin1')) {
       setMask(url + elemId + '_' + type + '_skin1.png', elemId + '_skin1');
    } else {
        unsetMask(elemId + '_skin1');
    }
    if (mask.includes('skin2')) {
        setMask(url + elemId + '_' + type + '_skin2.png', elemId + '_skin2');
    } else {
        unsetMask(elemId + '_skin2');
    }
    if (mask.includes('scale1')) {
        setMask(url + elemId + '_' + type + '_scale1.png', elemId + '_scale1');
    } else {
        unsetMask(elemId + '_scale1');
    }
    if (mask.includes('fur1')) {
        setMask(url + elemId + '_' + type + '_fur1.png', elemId + '_fur1');
    } else {
        unsetMask(elemId + '_fur1');
    }
    if (mask.includes('fur2')) {
        setMask(url + elemId + '_' + type + '_fur2.png', elemId + '_fur2');
    } else {
        unsetMask(elemId + '_fur2');
    }
    setMask(url + elemId + '_' + type + '_line.png', elemId + '_line');
}
function setElementHair(url, elemId, mask, type) {
    //elemId+ '_' + mask = id
    if (mask.includes('color')) {
        setMask(url + elemId + '_' + type + '_color.png', elemId + '_color');
    } else {
        unsetMask(elemId + '_color');
    }
    setMask(url + elemId + '_' + type + '_line.png', elemId + '_line');
}
function setElementHairFront(url, elemId, mask, type, horns_frontEnabled) {//if horns_front is enabled, we set to alt   //elemId+ '_' + mask = id
    if (!horns_frontEnabled) {
        if (mask.includes('color')) {
            setMask(url + elemId + '_' + type + '_color.png', elemId + '_color');
        } else {
            unsetMask(elemId + '_color');
        }
        setMask(url + elemId + '_' + type + '_line.png', elemId + '_line');
        setClassBody('horns_front', 'noHornsFront');
        setClassHair('hair_front', 'noHornsFront');
    }
    else {
        if (mask.includes('color')) {
            setMask(url + 'alt_' + elemId +  '_' + type + '_color.png', elemId + '_color');
        } else {
            unsetMask(elemId + '_color');
        }
        setMask(url + 'alt_' + elemId + '_' + type + '_line.png', elemId + '_line');
        setClassBody('horns_front', 'hornsFront');
        setClassHair('hair_front', 'hornsFront');
    }
}
function setElementEyes(url, elemId, mask, type) {
    //elemId+ '_' + mask = id
    if (mask.includes('sclera')) {
        setMask(url + elemId + '_' + type + '_sclera.png', elemId + '_sclera');
    } else {
        unsetMask(elemId + '_sclera');
    }
    if (mask.includes('iris')) {
        setMask(url + elemId + '_' + type + '_iris.png', elemId + '_iris');
    } else {
        unsetMask(elemId + '_iris');
    }
    if (mask.includes('fur2')) {
        setMask(url + elemId + '_' + type + '_fur2.png', elemId + '_fur2');
    } else {
        unsetMask(elemId + '_fur2');
    }
    if (mask.includes('color')) {
        setMask(url + elemId + '_' + type + '_color.png', elemId + '_color');
    } else {
        unsetMask(elemId + '_color');
    }
    setMask(url + elemId + '_' + type + '_line.png', elemId + '_line');

}

function unsetElementBody(elemId) {

    unsetMask(elemId + '_skin1');
    unsetMask(elemId + '_skin2');
    unsetMask(elemId + '_scale1');
    unsetMask(elemId + '_fur1');
    unsetMask(elemId + '_fur2');
    unsetMask( elemId + '_line');
}
function unsetElementHair(elemId) {
    unsetMask(elemId + '_color');
    unsetMask( elemId + '_line');
}



//helper methods
function setMask(url, id) {
    document.getElementById(id).src = url;
}
function unsetMask(id) {
    document.getElementById(id).src = blank;
}

function setClassBody(id, className) {
    //get img element
    document.getElementById(id + '_skin1').className = className;
    document.getElementById(id + '_skin2').className = className;
    document.getElementById(id + '_scale1').className = className;
    document.getElementById(id + '_fur1').className = className;
    document.getElementById(id + '_fur2').className = className;
    document.getElementById(id + '_line').className = className;
}

function setClassHair(id, className) {
    //get img element
    document.getElementById(id + '_color').className = className;
    document.getElementById(id + '_line').className = className;
}

function maskImplementer(url, id, maskString, type) {
    if (maskString !== 'line') {
        let div = document.createElement('div');
        let img = document.createElement('img'); //creates the image
        if (type !== 'blank') {
            img.src = url + id + '_' + type + '_' + maskString + '.png';
        } else {
            img.src = blank;
        }
        div.className = maskString;
        img.id = id + '_' + maskString;
        let src = document.getElementById('container');
        div.appendChild(img)
        src.appendChild(div);
    }
    else {
        let img = document.createElement('img'); //creates the image
        if (type !== 'blank') {
            img.src = url + id + '_' + type + '_' + maskString + '.png';
        } else {
            img.src = blank;
        }
        img.id = id + '_' + maskString;
        let src = document.getElementById('container');

        src.appendChild(img);
    }
}

function getPreviousStatusLegs() {
    //since we're gonna be updating all the
    let img = document.getElementById('legs_full_line');
    let status = img.className;
    //console.log(status);
    return status;
}

function getStatusHorns() {
    //since we're gonna be updating all the
    let img = document.getElementById('hair_front_line');
    let status = img.className;
    //console.log(status);
    return status;
}

function updatePart(part, index, partName) {
    //console.log(part[index].name);
    //hair
    if (partName == 'hair_back') {
        setElementHair(part[index].url, partName, part[index].mask, part[index].type);
    }
    else if (partName == 'hair_front') {
        if (getStatusHorns() === 'noHornsFront') { //if horns are not enabled we change hair as usual
            setElementHair(part[index].url, partName, part[index].mask, part[index].type);
        }
        else if (getStatusHorns() === 'hornsFront') { //if horns ARE enabled we must do the alt
            setElementHairFront(part[index].url, partName, part[index].mask, part[index].type, true);
        }
    }
    //eyes
    else if (partName == 'eyes') {
        setElementEyes(part[index].url, partName, part[index].mask, part[index].type);
    }

    else if (partName == 'horns_front') {
        //console.log(getStatusHorns());
        if (getStatusHorns() === 'noHornsFront') {
            setElementBody(part[index].url, partName, part[index].mask, part[index].type); //make horns visible
            //setElementHairFront(part[index].url, partName, part[index].mask, part[index].type,true); //set hairfront to alt
            let currHairLines = document.getElementById('hair_front_line').src.split("/");
            let currHairColors = document.getElementById('hair_front_color').src.split("/");

            //console.log(currHairColors[currHairColors.length-1]);



            //console.log(currHairLines.join('/'));
            if (currHairLines[currHairLines.length-1] !== "blank.png") { //we have an image and not a blank
                let currHairLine = currHairLines[currHairLines.length-1];
                let currHairColor = currHairColors[currHairColors.length-1];
                currHairLines.pop();
                currHairColors.pop();
                //console.log(currHairLine);
                document.getElementById('hair_front_line').src = currHairLines.join('/') + '/' + 'alt_' + currHairLine;
                document.getElementById('hair_front_color').src = currHairColors.join('/') + '/' + 'alt_' + currHairColor;
            }


            setClassBody('horns_front', 'hornsFront');
            setClassHair('hair_front', 'hornsFront');


        }
        else if (getStatusHorns() === 'hornsFront') { //horns front already enabled so we just change the horns front
            setElementBody(part[index].url, partName, part[index].mask, part[index].type);

        }
    }


    //body
    else {
        if (partName == 'legs_hips')  {
            if (getPreviousStatusLegs() == 'full') {
                //means we are going from full -> not full, so we gotta reinitialize the other parts associated with not full legs
                setElementBody(part[index].url, partName, part[index].mask, part[index].type);
                setElementBody(legs_feet[0].url, 'legs_feet', legs_feet[0].mask, legs_feet[0].type);
                unsetElementBody('legs_full');
                setClassBody('tail', 'notFull');
                setClassBody('legs_feet', 'notFull');
                setClassBody('legs_hips', 'notFull');
                setClassBody('legs_full', 'notFull');
            }
            else if (getPreviousStatusLegs() == 'notFull'){
                setElementBody(part[index].url, partName, part[index].mask, part[index].type);
            }
            else {
                //console.log("yo im really fucking bugged if this somehow triggered");
            }
        }
        else if (partName == 'legs_feet' ){
            if (getPreviousStatusLegs() == 'full') {
                //means we are going from full -> not full, so we gotta reinitialize the other parts associated with not full legs
                setElementBody(part[index].url, partName, part[index].mask, part[index].type);
                setElementBody(legs_hips[0].url, 'legs_hips', legs_hips[0].mask, legs_hips[0].type);
                unsetElementBody('legs_full');
                setClassBody('tail', 'notFull');
                setClassBody('legs_feet', 'notFull');
                setClassBody('legs_hips', 'notFull');
                setClassBody('legs_full', 'notFull');
            }
            else if (getPreviousStatusLegs() == 'notFull'){
                setElementBody(part[index].url, partName, part[index].mask, part[index].type);
            }
            else {
                //console.log("yo im really fucking bugged if this somehow triggered");
            }
        }
        else if (partName == 'tail' ){
            if (getPreviousStatusLegs() == 'full') {
                //means we are going from full -> not full, so we gotta reinitialize the other parts associated with not full legs
                setElementBody(part[index].url, partName, part[index].mask, part[index].type);
                setElementBody(legs_hips[0].url, 'legs_hips', legs_hips[0].mask, legs_hips[0].type);
                setElementBody(legs_feet[0].url, 'legs_feet', legs_feet[0].mask, legs_feet[0].type);
                unsetElementBody('legs_full');
                setClassBody('tail', 'notFull');
                setClassBody('legs_feet', 'notFull');
                setClassBody('legs_hips', 'notFull');
                setClassBody('legs_full', 'notFull');
            }
            else if (getPreviousStatusLegs() == 'notFull'){
                setElementBody(part[index].url, partName, part[index].mask, part[index].type);
            }
            else {
                //console.log("yo im really fucking bugged if this somehow triggered");
            }
        }
        else if (partName == 'legs_full' ){
            if (getPreviousStatusLegs() == 'full') {
                setElementBody(part[index].url, partName, part[index].mask, part[index].type);
            }
            else if (getPreviousStatusLegs() == 'notFull'){
                //means we are going from not full-> full
                unsetElementBody('legs_feet');
                unsetElementBody('legs_hips');
                unsetElementBody('tail');
                setElementBody(part[index].url, partName, part[index].mask, part[index].type);
                setClassBody('tail', 'full');
                setClassBody('legs_feet', 'full');
                setClassBody('legs_hips', 'full');
                setClassBody('legs_full', 'full');
            }
            else {
                //console.log("yo im really fucking bugged if this somehow triggered");
            }
        }
        else {
            setElementBody(part[index].url, partName, part[index].mask, part[index].type);
        }
    }


}



function initSideBarElement(fileName, part, requirement) {
    let div = document.createElement('div'); //creates the divider
    let img = document.createElement('img'); //creates the image
    img.src = 'icons/' + fileName + '.png';
    let src = document.getElementById('container2');
    div.className = 'dropdown';
    div.appendChild(img);
    //console.log(part.length);

    let div2 = document.createElement('div'); //creates the divider
    div2.className = 'dropdown-content';
    if (requirement == 'optional') {
        let button = document.createElement('button'); //creates the button
        let buttonText = document.createTextNode('None');
        button.className = "update_part"
        button.onclick = function(){
            if (fileName === "hair_back" || fileName === "hair_front") {
                unsetElementHair(fileName);
            }
            else if (fileName === "horns_front") {
                if (getStatusHorns() == 'hornsFront') { //if horns are  enabled this gets rid of them.
                    unsetElementBody(fileName); //make horns invisible
                    //setElementHairFront(part[index].url, partName, part[index].mask, part[index].type,true); //set hairfront to alt
                    let currHairLines = document.getElementById('hair_front_line').src.split("/");
                    let currHairColors = document.getElementById('hair_front_color').src.split("/");
                    if (currHairLines[currHairLines.length-1] !== "blank.png") { //we have an image and not a blank
                        let currHairLine = currHairLines[currHairLines.length-1];
                        let currHairColor = currHairColors[currHairColors.length-1];
                        currHairLines.pop();
                        currHairColors.pop();
                        //console.log(currHairLine);
                        document.getElementById('hair_front_line').src = currHairLines.join('/') + '/' + currHairLine.substring(4, currHairLine.length);
                        document.getElementById('hair_front_color').src = currHairColors.join('/') + '/' + currHairColor.substring(4, currHairColor.length);
                    }

                    setClassBody('horns_front', 'noHornsFront');
                    setClassHair('hair_front', 'noHornsFront');
                }
            }

            else {
                unsetElementBody(fileName);
            }
        };
        button.appendChild(buttonText);
        div2.appendChild(button);
    }
    for (let i = 0; i < part.length; i++) {
        let button = document.createElement('button'); //creates the button
        button.className = "update_part"
        button.onclick = function(){
            updatePart(part, i, fileName);
        };
        let buttonText = document.createTextNode(part[i].name);
        button.appendChild(buttonText);
        div2.appendChild(button);
    }


    div.appendChild(div2);
    src.appendChild(div);
}

function initSideBar() {
    initSideBarElement('head', head,'mandatory');
    initSideBarElement('hair_front', hair_front, 'optional');
    initSideBarElement('hair_back', hair_back, 'optional');
    initSideBarElement('horns', horns, 'optional');
    initSideBarElement('horns_front', horns_front, 'optional');
    initSideBarElement('ears', ears, 'optional');
    initSideBarElement('eyes', eyes, 'mandatory');
    initSideBarElement('mouth', mouth, 'mandatory');
    initSideBarElement('nose', nose, 'mandatory');
    initSideBarElement('neck', neck, 'mandatory');
    initSideBarElement('shoulders', shoulders, 'mandatory');
    initSideBarElement('arms', arms, 'mandatory');
    initSideBarElement('torso', torso, 'mandatory');
    initSideBarElement('wings', wings, 'optional');
    initSideBarElement('tail', tail, 'optional');
    initSideBarElement('legs_hips', legs_hips, 'mandatory');
    initSideBarElement('legs_feet', legs_feet, 'mandatory');
    initSideBarElement('legs_full', legs_full, 'mandatory');
}


//sets thing
function setColor(mask, colorString) {
    let listElements = document.getElementsByClassName(mask);
    let listElement;
    let paletteString = colorString;

    for (let i = 0; i < listElements.length; i++) {
        listElement = listElements[i];

        listElement.style.filter = paletteString;

    }

}
//sets entire thing to a palette color
function setPalette(palette) {
    setColor("skin1", palette.skin1filter);
    setColor("scale1", palette.scale1filter);
    setColor("skin2", palette.skin2filter);
    setColor("fur1", palette.fur1filter);
    setColor("fur2", palette.fur2filter);
    setColor("sclera", palette.sclerafilter);
    setColor("iris", palette.irisfilter);
    setColor("color", palette.colorfilter);
}





function updateSwatch(id, palette) {
    let swatch = document.getElementById(id);
    let dropSwatch = document.getElementsByClassName(id + "_curr");
    if (id === ("skin1")) {
        swatch.style.backgroundColor = palette.skin1;
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palette.skin1;
            dropSwatch[i].onclick = function () {
                document.getElementById(getId(i)).style.backgroundColor = palette.skin1;
                setColor(getId(i), palette.skin1filter);
                document.getElementById("paletteSelect").value = palette.name + " (Custom)";
            }
        }
    }
    else if (id === ("scale1")) {
        swatch.style.backgroundColor = palette.scale1;
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palette.scale1;
            dropSwatch[i].onclick = function () {
                document.getElementById(getId(i)).style.backgroundColor = palette.scale1;
                setColor(getId(i), palette.scale1filter);
                document.getElementById("paletteSelect").value = palette.name + " (Custom)";
            }
        }
    }
    else if (id === ("skin2")) {
        swatch.style.backgroundColor = palette.skin2;
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palette.skin2;
            dropSwatch[i].onclick = function () {
                document.getElementById(getId(i)).style.backgroundColor = palette.skin2;
                setColor(getId(i), palette.skin2filter);
                document.getElementById("paletteSelect").value = palette.name + " (Custom)";
            }
        }
    }
    else if (id === ("fur1")) {
        swatch.style.backgroundColor = palette.fur1;
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palette.fur1;
            dropSwatch[i].onclick = function () {
                document.getElementById(getId(i)).style.backgroundColor = palette.fur1;
                setColor(getId(i), palette.fur1filter);
                document.getElementById("paletteSelect").value = palette.name + " (Custom)";
            }
        }
    }
    else if (id === ("fur2")) {
        swatch.style.backgroundColor = palette.fur2;
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palette.fur2;
            dropSwatch[i].onclick = function () {
                document.getElementById(getId(i)).style.backgroundColor = palette.fur2;
                setColor(getId(i), palette.fur2filter);
                document.getElementById("paletteSelect").value = palette.name + " (Custom)";
            }
        }
    }
    else if (id === ("sclera")) {
        swatch.style.backgroundColor = palette.sclera;
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palette.sclera;
            dropSwatch[i].onclick = function () {
                document.getElementById(getId(i)).style.backgroundColor = palette.sclera;
                setColor(getId(i), palette.sclerafilter);
                document.getElementById("paletteSelect").value = palette.name + " (Custom)";
            }
        }
    }
    else if (id === ("iris")) {
        swatch.style.backgroundColor = palette.iris;
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palette.iris;
            dropSwatch[i].onclick = function () {
                document.getElementById(getId(i)).style.backgroundColor = palette.iris;
                setColor(getId(i), palette.irisfilter);
                document.getElementById("paletteSelect").value = palette.name + " (Custom)";
            }
        }
    }
    else if (id === ("color")) {
        swatch.style.backgroundColor = palette.color;
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palette.color;
            dropSwatch[i].onclick = function () {
                document.getElementById(getId(i)).style.backgroundColor = palette.color;
                setColor(getId(i), palette.colorfilter);
                document.getElementById("paletteSelect").value = palette.name + " (Custom)";
            }
        }
    }



}


function updateOtherSwatch(id) {
    let swatch = document.getElementById(id);
    let dropSwatch = document.getElementsByClassName(id + "_other");
    if (id === ("skin1")) {
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palettes[i].skin1;
            dropSwatch[i].onclick = function () {
                swatch.style.backgroundColor = palettes[i].skin1;
                setColor(id, palettes[i].skin1filter);
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }
    }
    else if (id === ("scale1")) {
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palettes[i].scale1;
            dropSwatch[i].onclick = function () {
                swatch.style.backgroundColor = palettes[i].scale1;
                setColor(id, palettes[i].scale1filter);
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }
    }
    else if (id === ("skin2")) {
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palettes[i].skin2;
            dropSwatch[i].onclick = function () {
                swatch.style.backgroundColor = palettes[i].skin2;
                setColor(id, palettes[i].skin2filter);
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }
    }
    else if (id === ("fur1")) {
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palettes[i].fur1;
            dropSwatch[i].onclick = function () {
                swatch.style.backgroundColor = palettes[i].fur1;
                setColor(id, palettes[i].fur1filter);
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }
    }
    else if (id === ("fur2")) {
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palettes[i].fur2;
            dropSwatch[i].onclick = function () {
                swatch.style.backgroundColor = palettes[i].fur2;
                setColor(id, palettes[i].fur2filter);
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }
    }
    else if (id === ("sclera")) {
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palettes[i].sclera;
            dropSwatch[i].onclick = function () {
                swatch.style.backgroundColor = palettes[i].sclera;
                setColor(id, palettes[i].sclerafilter);
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }
    }
    else if (id === ("iris")) {
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palettes[i].iris;
            dropSwatch[i].onclick = function () {
                swatch.style.backgroundColor = palettes[i].iris;
                setColor(id, palettes[i].irisfilter);
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }
    }
    else if (id === ("color")) {
        for (let  i = 0; i < dropSwatch.length; i++) {
            dropSwatch[i].style.backgroundColor = palettes[i].color;
            dropSwatch[i].onclick = function () {
                swatch.style.backgroundColor = palettes[i].color;
                setColor(id, palettes[i].colorfilter);
                if (!(document.getElementById("paletteSelect").value).endsWith(" (Custom)")) {
                    document.getElementById("paletteSelect").value = document.getElementById("paletteSelect").value + " (Custom)";
                }
            }
        }
    }




}



function initOtherPaletteSwatches() {
    for (let j = 0; j < 8; j++) {//masks
            updateOtherSwatch(getId(j));

    }
}


function updateSwatchesToPalette(palette) {
    updateSwatch("skin1", palette);
    updateSwatch("scale1", palette);
    updateSwatch("skin2", palette);
    updateSwatch("fur1", palette);
    updateSwatch("fur2", palette);
    updateSwatch("sclera", palette);
    updateSwatch("iris", palette);
    updateSwatch("color", palette);

}

function getPaletteByIndex(index) {
    if ((index % 2 ) == 0) {
        setPalette(palettes[index/2]);
        updateSwatchesToPalette(palettes[index/2]);
    }
}

function initSideBar2() {
    let select = document.getElementById("paletteSelect");
    for (let i=0; i < palettes.length; i++) {
        let option = document.createElement('option');
        option.text = palettes[i].name;

        select.onclick = function() {
            if (typeof(this.selectedIndex) != 'undefined')
                //console.log(this.selectedIndex);
                getPaletteByIndex(this.selectedIndex);
        }

        /*option.onclick = function(){
            setPalette(palettes[i]);
            updateSwatchesToPalette(palettes[i]);
        };*/

        option.className = "paletteSelectPalette";

        select.add(option);

        let custom = document.createElement('option');
        custom.text = palettes[i].name + " (Custom)";
        custom.hidden = true;

        custom.className = "paletteSelectPalette";

        select.add(custom); //adds the custom element for whenever we update the palette with colors outside of the regular.
    }

    let paletteContainer = document.getElementById("paletteContainer");
    for (let i = 0; i < 8; i++) {
        let swatch = document.createElement("div");

        swatch.id = getId(i);
        if (swatch.id === "skin1") {
            swatch.style.backgroundColor = palettes[0].skin1;
        }
        else if (swatch.id === "scale1") {
            swatch.style.backgroundColor = palettes[0].scale1;
        }
        else if (swatch.id === "skin2") {
            swatch.style.backgroundColor = palettes[0].skin2;
        }
        else if (swatch.id === "fur1") {
            swatch.style.backgroundColor = palettes[0].fur1;
        }
        else if (swatch.id === "fur2") {
            swatch.style.backgroundColor = palettes[0].fur2;
        }
        else if (swatch.id === "sclera") {
            swatch.style.backgroundColor = palettes[0].sclera;
        }
        else if (swatch.id === "iris") {
            swatch.style.backgroundColor = palettes[0].iris;
        }
        else if (swatch.id === "color") {
            swatch.style.backgroundColor = palettes[0].color;
        }
        //after setting the color we can initialize the div
        initSideBar2Display(swatch);
        paletteContainer.appendChild(swatch);
    }

    updateSwatchesToPalette(palettes[0]);
    initOtherPaletteSwatches();


}

function initSideBar2Display(swatch) {
    swatch.className="paletteSwatch " + " dropdown2";
    let div = document.createElement("div");
    div.className = 'dropdown-content2';
    let name = document.createElement("h1");
    name.innerHTML = getNiceName(swatch.id);
    let currPaletteName = document.createElement("h2");
    currPaletteName.innerHTML = "Current Palette";
    //returns the name value of the select dropdown
    //console.log(document.getElementById("paletteSelect").options[document.getElementById("paletteSelect").selectedIndex].value);

    //console.log(document.getElementById("paletteSelect").options[document.getElementById("paletteSelect").selectedIndex + 1].value);
    //so our "name (custom) options on the select are index + 1 of the originals, which makes sense, i'm just stupid
    let palette = getPaletteByName(document.getElementById("paletteSelect").options[document.getElementById("paletteSelect").selectedIndex].value);

    //console.log(palette.name + "(we do a little pogging)");

    div.appendChild(name);
    div.appendChild(currPaletteName);

    for (let i = 0; i < 8; i++) {

        //console.log("i'm called how many times?"); //64. you are called 64 times

        let dropDownSwatch = document.createElement("div");
        dropDownSwatch.className = "dropdownSwatch" + " " + getId(i) + "_curr";
        //setPaletteColor(dropDownSwatch, palette, getId(i), swatch);
        div.appendChild(dropDownSwatch);
    }

    let otherElementsName = document.createElement("h2");
    otherElementsName.innerHTML = "Other Palettes";
    div.appendChild(otherElementsName);

    for (let i = 0; i < palettes.length; i++) {
        let dropDownSwatch = document.createElement("div");
        dropDownSwatch.className = "dropdownSwatch2 " + swatch.id + "_other";// + " " + getId(i) + "_curr";

        div.appendChild(dropDownSwatch);


    }




    swatch.appendChild(div);
}

//if we have odd index we have a "(custom)" case on our hands, just a note for later
function getPaletteByName(name) {
    for (let i = 0; i < palettes.length; i++) {
        let palette = palettes[i];
        if (name === palette.name) {
            return palette;
        }
    }
}

function getNiceName(codeName) {
    switch(codeName) {
        case "skin1": return "Skin";
        case "scale1": return "Scales/Chitin";
        case "skin2": return "Sec. Skin";
        case "fur1": return "Fur/Feathers";
        case "fur2": return "Sec. Fur/Feathers";
        case "sclera": return "Sclera";
        case "iris": return "Iris";
        case "color": return "Hair"
    }
}

function getId(i) {
    switch(i) {
        case 0: return "skin1";
        case 1: return "scale1";
        case 2: return "skin2";
        case 3: return "fur1";
        case 4: return "fur2";
        case 5: return "sclera"
        case 6: return "iris";
        case 7: return "color"
    }
}

function setBlank(id, maskString) {
    if (maskString !== 'line') {
        let div = document.createElement('div');
        let img = document.createElement('img'); //creates the image
        img.src = blank;
        img.id = id + '_' + maskString;
        let src = document.getElementById('container');
        div.className = maskString;
        div.appendChild(img)
        src.appendChild(div);
        }
    else {
        let img = document.createElement('img'); //creates the image
        img.src = blank;
        img.id = id + '_' + maskString;
        let src = document.getElementById('container');
        src.appendChild(img);
    }
}
function initElementBody(url, id, mask, type) {
    if (mask.includes('skin1')) {
        maskImplementer(url, id, 'skin1', type);
    } else {
        setBlank(id, 'skin1');
    }
    if (mask.includes('scale1')) {
        maskImplementer(url, id, 'scale1', type);
    } else {
        setBlank(id, 'scale1');
    }
    if (mask.includes('skin2')) {
        maskImplementer(url, id, 'skin2', type);
    } else {
        setBlank(id, 'skin2');
    }
    if (mask.includes('fur1')) {
        maskImplementer(url, id, 'fur1', type);
    } else {
        setBlank(id, 'fur1');
    }
    if (mask.includes('fur2')) {
        maskImplementer(url, id, 'fur2', type);
    } else {
        setBlank(id, 'fur2');
    }
    maskImplementer(url, id, 'line', type)
}
function initElementHair(url, id, mask, type) {
    if ((mask.length > 0)) {
        if (mask.includes('color')) {
            maskImplementer(url, id, 'color', type);
        } else {
            setBlank(id, 'color');
        }
    }
    if (type !== 'blank') {
        maskImplementer(url, id, 'line', type)
    }
}
function initElementEyes(url, id, mask, type) {
    if ((mask.length > 0)) {
         if (mask.includes('sclera')) {
            maskImplementer(url, id, 'sclera', type);
        } else {
            setBlank(id, 'sclera');
        }
        if (mask.includes('iris')) {
            maskImplementer(url, id, 'iris', type);
        } else {
            setBlank(id, 'iris');
        }
        if (mask.includes('fur2')) {
            maskImplementer(url, id, 'fur2', type);
        } else {
            setBlank(id, 'fur2');
        }
        if (mask.includes('color')) {
            maskImplementer(url, id, 'color', type);
        } else {
            setBlank(id, 'color');
        }

    }
    if (type !== 'blank') {
        maskImplementer(url, id, 'line', type)
    }
}

initSideBar();

initSideBar2();
//display base initially.

//base has no tail so we pass blank in
initElementBody(tail[0].url, 'tail', tail[0].mask, 'blank');


//base has no wings so we pass blank in
initElementBody(wings[0].url, 'wings', wings[0].mask, 'blank');


setClassBody('tail', 'notFull');
//hair_back
initElementHair(hair_back[0].url, 'hair_back', hair_back[0].mask, hair_back[0].type);
//legs will be normal but we'll still initialize full
initElementBody(legs_feet[0].url, 'legs_feet', legs_feet[0].mask, legs_feet[0].type);

setClassBody('legs_feet', 'notFull');

initElementBody(legs_hips[0].url, 'legs_hips', legs_hips[0].mask, legs_hips[0].type);

setClassBody('legs_hips', 'notFull');

//full will be blank
initElementBody(blank, 'legs_full', legs_full[0].mask, 'blank');

setClassBody('legs_full', 'notFull');
//torso
initElementBody(torso[0].url, 'torso', torso[0].mask, torso[0].type);
//neck
initElementBody(neck[0].url, 'neck', neck[0].mask, neck[0].type);
//arms (+ hands)
initElementBody(arms[0].url, 'arms', arms[0].mask, arms[0].type);
//shoulders
initElementBody(shoulders[0].url, 'shoulders', shoulders[0].mask, shoulders[0].type);
//ears
initElementBody(ears[0].url, 'ears', ears[0].mask, ears[0].type);
//head
initElementBody(head[0].url, 'head', head[0].mask, head[0].type);
//nose
initElementBody(nose[0].url, 'nose', nose[0].mask, nose[0].type);
//mouth
initElementBody(mouth[0].url , 'mouth', mouth[0].mask, mouth[0].type);
//eyes (unique case)
initElementEyes(eyes[0].url, 'eyes', eyes[0].mask, eyes[0].type);
//base has no horns so we pass blank in
initElementBody(blank, 'horns', horns[0].mask, 'blank');
//hair_front
initElementHair(hair_front[0].url, 'hair_front', hair_front[0].mask, hair_front[0].type);

setClassHair('hair_front', 'noHornsFront');

initElementBody(blank, 'horns_front', horns_front[0].mask, 'blank');

setClassBody('horns_front', 'noHornsFront');

setPalette(palettes[0]);


//disables the up and down arrow keys for the select box so we don't get any unwanted behavior.
$('select').on('keydown', function(e){
    if(e.keyCode === 38 || e.keyCode === 40) { //up or down
        e.preventDefault();
        return false;
    }
});

