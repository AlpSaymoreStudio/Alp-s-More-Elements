elements.obsidian = {
  color: "#1a0a2e",
  behavior: behaviors.WALL,
  category: "solids",
  state: "solid",
  tempHigh: 1500,
  stateHigh: "lava",
  conduct: 0.1,
};

elements.sulfur = {
  color: ["#e8d44d", "#d4bc30", "#f0e060"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 2070,
  tempHigh: 115,
  stateHigh: "molten_sulfur",
};

elements.molten_sulfur = {
  color: "#c8860a",
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1800,
  viscosity: 20000,
  tempHigh: 444,
  stateHigh: "sulfur_gas",
  tempLow: 115,
  stateLow: "sulfur",
};

elements.sulfur_gas = {
  color: "#d4c840",
  behavior: behaviors.GAS,
  category: "gases",
  state: "gas",
  density: 2,
  tempLow: 444,
  stateLow: "molten_sulfur",
};

elements.mercury = {
  color: ["#b0bec5", "#90a4ae", "#cfd8dc"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 13600,
  viscosity: 2000,
  temp: 22,
  tempLow: -39,
  stateLow: "frozen_mercury",
  tempHigh: 357,
  stateHigh: "mercury_vapor",
  conduct: 0.9,
};

elements.frozen_mercury = {
  color: "#7986cb",
  behavior: behaviors.WALL,
  category: "solids",
  state: "solid",
  tempHigh: -39,
  stateHigh: "mercury",
  conduct: 0.8,
};

elements.mercury_vapor = {
  color: "#b0bec580",
  behavior: behaviors.GAS,
  category: "gases",
  state: "gas",
  density: 7,
  tempLow: 357,
  stateLow: "mercury",
};

elements.titanium = {
  color: ["#9e9e9e", "#bdbdbd", "#757575"],
  behavior: behaviors.WALL,
  category: "solids",
  state: "solid",
  tempHigh: 1668,
  stateHigh: "lava",
  conduct: 0.15,
};

elements.honey = {
  color: ["#f5a623", "#e8941a", "#f7b733"],
  behavior: behaviors.LIQUID,
  category: "food",
  state: "liquid",
  density: 1400,
  viscosity: 900000,
  tempHigh: 150,
  stateHigh: "steam",
};

elements.tar = {
  color: ["#1b1b1b", "#2a2a2a", "#0d0d0d"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1050,
  viscosity: 800000,
  tempHigh: 300,
  stateHigh: "fire",
  flammable: true,
};

elements.resin = {
  color: ["#c17f24", "#a0622a", "#d4943a"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 1200,
  viscosity: 600000,
  tempHigh: 200,
  stateHigh: "fire",
};

elements.chalk = {
  color: ["#f5f5f5", "#eeeeee", "#fafafa"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 2000,
  reactions: {
    "water": { elem1: null, elem2: "water", chance: 0.05 },
  },
};

elements.volcanic_ash = {
  color: ["#616161", "#424242", "#757575"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 700,
  reactions: {
    "water": { elem1: "wet_ash", elem2: null, chance: 0.3 },
  },
};

elements.wet_ash = {
  color: "#37474f",
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 1200,
  tempHigh: 80,
  stateHigh: "volcanic_ash",
};

elements.glacite = {
  color: ["#80deea", "#b2ebf2", "#4dd0e1"],
  behavior: behaviors.WALL,
  category: "solids",
  state: "solid",
  temp: -50,
  tempHigh: -10,
  stateHigh: "water",
  conduct: 0.7,
};

elements.neon_gas = {
  color: ["#ff6b6b", "#ff4757", "#ff7f7f"],
  behavior: behaviors.GAS,
  category: "gases",
  state: "gas",
  density: 1,
  conduct: 0,
};

elements.bronze = {
  color: ["#cd7f32", "#b87333", "#d4883a"],
  behavior: behaviors.WALL,
  category: "solids",
  state: "solid",
  tempHigh: 950,
  stateHigh: "lava",
  conduct: 0.6,
  reactions: {
    "acid": { elem1: null, elem2: "acid", chance: 0.05 },
  },
};

elements.bismuth = {
  color: ["#e040fb", "#ce93d8", "#b39ddb", "#80cbc4", "#c5e1a5"],
  behavior: behaviors.WALL,
  category: "solids",
  state: "solid",
  tempHigh: 271,
  stateHigh: "lava",
  conduct: 0.04,
};

elements.crystal = {
  color: ["#00e5ff", "#18ffff", "#64ffda", "#e0f7fa"],
  behavior: behaviors.WALL,
  category: "solids",
  state: "solid",
  tempHigh: 1700,
  stateHigh: "lava",
  conduct: 0.05,
  tick: function(pixel) {
    pixel.age = (pixel.age || 0) + 1;
    if (pixel.age >= 500) {
      pixel.age = 0;
      var dirs = [[-1,0],[1,0],[0,-1],[0,1]];
      var dir = dirs[Math.floor(Math.random() * dirs.length)];
      var nx = pixel.x + dir[0];
      var ny = pixel.y + dir[1];
      if (isEmpty(nx, ny)) {
        createPixel("crystal", nx, ny);
      }
    }
  },
};

elements.plasma_orb = {
  color: ["#ea00ff", "#d500f9", "#b300e0", "#ff00e5", "#ff40ff"],
  behavior: behaviors.GAS,
  category: "energy",
  state: "gas",
  density: 50,
  temp: 8000,
  conduct: 1,
  tick: function(pixel) {
    pixel.age = (pixel.age || 0) + 1;
    if (pixel.age >= 10) {
      pixel.age = 0;
      var dirs = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]];
      var dir = dirs[Math.floor(Math.random() * dirs.length)];
      var nx = pixel.x + dir[0];
      var ny = pixel.y + dir[1];
      var p = getPixel(nx, ny);
      if (p) changePixel(p, "fire");
    }
  },
};
