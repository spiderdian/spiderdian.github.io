const paletteList = [ 
    { 
        "name": "Monochroma",
        "data":
        {
            "skin1": "#676767",
            "scale1": "#C2C2C2",
            "skin2": "#8D8D8D",
            "fur1": "#424242",
            "fur2": "#6D6D6D",
            "sclera": "#FFFFFF",
            "iris": "#68554C",
            "color": "#6B757E"
        }
    },
    { 
        "name": "Autumn",
        "data":
        {
            "skin1": "#C28B78",
            "scale1": "#B15145",
            "skin2": "#E8C39E",
            "fur1": "#E3A96D",
            "fur2": "#BC7D5E",
            "sclera": "#F0F0F0",
            "iris": "#B34F42",
            "color": "#E9E5DF"
        }
    },
    { 
        "name": "Cheese Moon", 
        "data":
        {
            "skin1": "#817CA7",
            "scale1": "#49538B",
            "skin2": "#D3D3F2",
            "fur1": "#F0B367",
            "fur2": "#AB79A5",
            "sclera": "#E98C85",
            "iris": "#000000",
            "color": "#F0B367"
        }
    },
    { 
        "name": "Cotton Candy",
        "data":
        {
            "skin1": "#FFEACB",
            "scale1": "#A4B6DF",
            "skin2": "#DEFFFA",
            "fur1": "#CDFCEB",
            "fur2": "#FFBFDA",
            "sclera": "#EFEFEF",
            "iris": "#DFC3FC",
            "color": "#FFBFDA"
        }
    },
    { 
        "name": "Red Snow",
        "data":
        {
            "skin1": "#F4DCD9",
            "scale1": "#DBD8DC",
            "skin2": "#D4525E",
            "fur1": "#EFEFEF",
            "fur2": "#636363",
            "sclera": "#EFEFEF",
            "iris": "#D4525E",
            "color": "#A1EDF2"
        }
    },
    { 
        "name": "Santr",
        "data":
        {
            "skin1": "#5C4A4B",
            "scale1": "#463233",
            "skin2": "#322324",
            "fur1": "#D58CAF",
            "fur2": "#E0B9CC",
            "sclera": "#181818",
            "iris": "#EC7B0C",
            "color": "#D58CAF"
        }
    },
    { 
        "name": "Iban",
        "data":
        {
            "skin1": "#F3C6B9",
            "scale1": "#A8423D",
            "skin2": "#FFE4D7",
            "fur1": "#383060",
            "fur2": "#1A142D",
            "sclera": "#F0F0F0",
            "iris": "#000000",
            "color": "#383060"
        }
    },
    { 
        "name": "Art Pop",
        "data":
        {
            "skin1": "#EBC094",
            "scale1": "#2C303D",
            "skin2": "#DFDFDF",
            "fur1": "#EBC842",
            "fur2": "#FF6F80",
            "sclera": "#FFFFFF",
            "iris": "#42EBD0",
            "color": "#84726A"
        }
    },


    { 
        "name": "Tundra",
        "data":
        {
            "skin1": "#D0B99F",
            "scale1": "#CABA97",
            "skin2": "#A08775",
            "fur1": "#B2C7CB",
            "fur2": "#E6F8F8",
            "sclera": "#E7FDFD",
            "iris": "#74E9E3",
            "color": "#927160"
        }
    },
    { 
        "name": "Aurora",
        "data":
        {
            "skin1": "#9FD1C3",
            "scale1": "#9DBEBF",
            "skin2": "#40646F",
            "fur1": "#2A3444",
            "fur2": "#24586D",
            "sclera": "#16042A",
            "iris": "#C472B9",
            "color": "#292947"
        }
    },
    {
        "name": "Pastel Sunset",
        "data":
        {
            "skin1": "#FDA884",
            "scale1": "#D572A4",
            "skin2": "#FFE6FF",
            "fur1": "#E78987",
            "fur2": "#FFBCAB",
            "sclera": "#F8E1F8",
            "iris": "#FF693F",
            "color": "#C082D0"
        }
    },
    {
        "name": "Sour",
        "data":
        {
            "skin1": "#F5EC73",
            "scale1": "#ACBDF7",
            "skin2": "#F7F0C8",
            "fur1": "#89EEDB",
            "fur2": "#9CF4DB",
            "sclera": "#BEF4B4",
            "iris": "#78F789",
            "color": "#F9E067"
        }
    },
    {
        "name": "Batty",
        "data":
        {
            "skin1": "#755047",
            "scale1": "#4D3135",
            "skin2": "#633C34",
            "fur1": "#684D5C",
            "fur2": "#684D5C",
            "sclera": "#554249",
            "iris": "#9CB8C2",
            "color": "#6F3D4D"
        }
    },
    {
        "name": "Muted",
        "data":
        {
            "skin1": "#C0A7B0",
            "scale1": "#B7A7AE",
            "skin2": "#B38270",
            "fur1": "#958A88",
            "fur2": "#A1918B",
            "sclera": "#F2B46D",
            "iris": "#E7F2F0",
            "color": "#EBD5A3"
        }
    },
    {
        "name": "Aviary",
        "data":
        {
            "skin1": "#38303D",
            "scale1": "#EEF4F5",
            "skin2": "#B2E8F2",
            "fur1": "#4C3D49",
            "fur2": "#748DAE",
            "sclera": "#F4ECEF",
            "iris": "#C7A9C6",
            "color": "#453540"
        }
    },
    {
        "name": "Interplanetary",
        "data":
        {
            "skin1": "#47A156",
            "scale1": "#ECF25A",
            "skin2": "#94E79A",
            "fur1": "#8FF08A",
            "fur2": "#F5ED5D",
            "sclera": "#0F0F0E",
            "iris": "#E5E4D6",
            "color": "#7BDB7C"
        }
    },
    {
        "name": "Blossoming",
        "data":
        {
            "skin1": "#C0D289",
            "scale1": "#65362F",
            "skin2": "#955C43",
            "fur1": "#EDA4CD",
            "fur2": "#EDA4CD",
            "sclera": "#675868",
            "iris": "#FF59C3",
            "color": "#EDAEBC"
        }
    },
    {
        "name": "Infernal",
        "data":
        {
            "skin1": "#E45A56",
            "scale1": "#653E4C",
            "skin2": "#D7504D",
            "fur1": "#4D3B41",
            "fur2": "#412E37",
            "sclera": "#AE2F32",
            "iris": "#E5AD4A",
            "color": "#4F5056"
        }
    },
    {
        "name": "Hadopelagic",
        "data":
        {
            "skin1": "#E1DFEA",
            "scale1": "#363530",
            "skin2": "#3F3D36",
            "fur1": "#2D2B2A",
            "fur2": "#282222",
            "sclera": "#151616",
            "iris": "#B2A8F2",
            "color": "#43342E"
        }
    },
    {
        "name": "Nostos Algós",
        "data":
        {
            "skin1": "#B0DB30",
            "scale1": "#8CC324",
            "skin2": "#90BC27",
            "fur1": "#278854",
            "fur2": "#1C4846",
            "sclera": "#D1EE27",
            "iris": "#F2F4D6",
            "color": "#3E9A3C"
        }
    },
    {
        "name": "Olivine",
        "data":
        {
            "skin1": "#716632",
            "scale1": "#2B3631",
            "skin2": "#888042",
            "fur1": "#B09C65",
            "fur2": "#C0A878",
            "sclera": "#FDFFEA",
            "iris": "#C95840",
            "color": "#3B4D36"
        }
    },
    {
        "name": "Spooky Kooky",
        "data":
        {
            "skin1": "#47403B",
            "scale1": "#D5803D",
            "skin2": "#DA9D50",
            "fur1": "#926650",
            "fur2": "#815242",
            "sclera": "#464246",
            "iris": "#E54CCC",
            "color": "#2E332E"
        }
    },
    {
        "name": "Mistletoe",
        "data":
        {
            "skin1": "#E3E4F4",
            "scale1": "#E75551",
            "skin2": "#D2414B",
            "fur1": "#5D7460",
            "fur2": "#48624B",
            "sclera": "#E1F8F9",
            "iris": "#242224",
            "color": "#F07864"
        }
    },
    {
        "name": "Berry Limeade",
        "data":
        {
            "skin1": "#EBF0A4",
            "scale1": "#F04473",
            "skin2": "#D1E274",
            "fur1": "#DC5A77",
            "fur2": "#EB8C90",
            "sclera": "#C9B2E0",
            "iris": "#583A7A",
            "color": "#B946A7"
        }
    },
    {
        "name": "'87",
        "data":
        {
            "skin1": "#544D83",
            "scale1": "#5F5B41",
            "skin2": "#96889A",
            "fur1": "#514478",
            "fur2": "#533977",
            "sclera": "#1C1733",
            "iris": "#F9F9E7",
            "color": "#462F75"
        }
    },
    {
        "name": "Cybernetic",
        "data":
        {
            "skin1": "#EFFAFB",
            "scale1": "#2A2E3A",
            "skin2": "#9FA1A5",
            "fur1": "#82878A",
            "fur2": "#949899",
            "sclera": "#4F4C4C",
            "iris": "#F9A348",
            "color": "#B7B9B9"
        }
    },
    {
        "name": "Graveyard Rift",
        "data":
        {
            "skin1": "#E2D0C3",
            "scale1": "#3A486E",
            "skin2": "#734034",
            "fur1": "#D05B3C",
            "fur2": "#C24430",
            "sclera": "#E9F5DC",
            "iris": "#3CD0A0",
            "color": "#FDD754"
        }
    },
    /*{ //it's mid
        "name": "Cold Burn",
        "data":
        {
            "skin1": "#243B53",
            "scale1": "#2B0608",
            "skin2": "#79D0E0",
            "fur1": "#460A0A",
            "fur2": "#EB884C",
            "sclera": "#1F181B",
            "iris": "#E2F4EE",
            "color": "#0A173C"
        }
    },*/
    {
        "name": "Dragoo",
        "data":
        {
            "skin1": "#E5C6E1",
            "scale1": "#E6DEE7",
            "skin2": "#AF92B3",
            "fur1": "#DDD2DE",
            "fur2": "#C3A8C2",
            "sclera": "#F4E0EE",
            "iris": "#8DC38B",
            "color": "#F0E0ED"
        }
    },
    {
        "name": "Color Graphics Distractor",
        "data":
        {
            "skin1": "#6CC9ED",
            "scale1": "#210624",
            "skin2": "#CBF0F5",
            "fur1": "#E856EB",
            "fur2": "#F9DAF9",
            "sclera": "#050526",
            "iris": "#33E6EE",
            "color": "#E93BE1"
        }
    },
    /*{ //this one sucks lol
        "name": "Disdainbow",
        "data":
        {
            "skin1": "#AA6B62",
            "scale1": "#D5BEAB",
            "skin2": "#DCDBC3",
            "fur1": "#A2AE95",
            "fur2": "#7B977B",
            "sclera": "#C8E4DF",
            "iris": "#9BBFE2",
            "color": "#988199"
        }
    },*/
    {
        "name": "Helianthus",
        "data":
        {
            "skin1": "#4B6751",
            "scale1": "#E48600",
            "skin2": "#963A01",
            "fur1": "#F4A703",
            "fur2": "#BF5A05",
            "sclera": "#4B2C19",
            "iris": "#70623F",
            "color": "#F9BC06"
        }
    },
    /*{ //this one is whatever
        "name": "Argy Bee",
        "data":
        {
            "skin1": "#B52E2E",
            "scale1": "#DC2222",
            "skin2": "#C73830",
            "fur1": "#2C882C",
            "fur2": "#1E7721",
            "sclera": "#525AF2",
            "iris": "#1C1CE4",
            "color": "#E7E7F5"
        }
    },*/
    {
        "name": "Laranja-de-sangue",
        "data":
        {
            "skin1": "#3C1614",
            "scale1": "#2D0409",
            "skin2": "#51201B",
            "fur1": "#F8A752",
            "fur2": "#F5F0E2",
            "sclera": "#F4D9CA",
            "iris": "#CB5B24",
            "color": "#F9922E"
        }
    },
    {
        "name": "Sand and Sun",
        "data":
        {
            "skin1": "#E0BDA5",
            "scale1": "#D57895",
            "skin2": "#DA9495",
            "fur1": "#CE96A8",
            "fur2": "#DCAC9C",
            "sclera": "#D9F0DF",
            "iris": "#83D7A5",
            "color": "#E2F4E5"
        }
    },
    {
        "name": "Synthwave",
        "data":
        {
            "skin1": "#0E022D",
            "scale1": "#E99D5A",
            "skin2": "#E96668",
            "fur1": "#843187",
            "fur2": "#67295A",
            "sclera": "#02010A",
            "iris": "#6E8AF9",
            "color": "#3D1931"
        }
    },
    {
        "name": "Midas Touched",
        "data":
        {
            "skin1": "#E6AA2A",
            "scale1": "#906612",
            "skin2": "#A17218",
            "fur1": "#A87D1A",
            "fur2": "#C89625",
            "sclera": "#7F590B",
            "iris": "#FFD561",
            "color": "#FFE361"
        }
    }
]