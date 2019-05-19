export default const CARDS = {

  "Trainee Elyse": { name: "Trainee Elyse", type: "hero", rarity: 2, upgrade: "Elyse the Ranger", factions: ["wyld"], stages: [
    { stage: 1, health: 2 }
  ], flavourText: "Elyse is a new adventurer like yourself. She's training with the Captain, though she seems more than eager to be out on her own." },

  "Elyse the Ranger": { name: "Elyse the Ranger", type: "hero", rarity: 2, upgrade: "Elyse the Truestriker", factions: ["wyld"], stages: [
    { stage: 1, health: 8, skills: [{ name: "heal", value: 1 }] },
    { stage: 1, health: 10, skills: [{ name: "heal", value: 1 }] },
    { stage: 1, health: 13, skills: [{ name: "heal", value: 1 }] },
    { stage: 1, health: 15, skills: [{ name: "heal", value: 2 }] }
  ], flavourText: "Elyse lived a simple life on the edge of civilization until adulthood, giving her a burning spirit for adventure and the tools to track it."}

  "Oda the Guardian": { name: "Oda the Guardian", type: "hero", rarity: 2, factions: ["aether"], stages: [
    { stage: 1, health: 8, skills: [{ name: "barrier", value: 1 }] },
    { stage: 1, health: 11, skills: [{ name: "barrier", value: 1 }] },
    { stage: 1, health: 13, skills: [{ name: "barrier", value: 1 }] },
    { stage: 1, health: 16, skills: [{ name: "vengeance", value: 1 }, { name: "barrier", value: 1 }] }
  ], flavourText: "Oda was born in a far away land, shipwrecked, and raised on a remote island temple. He's ventured in search of spellstones as a pilgrimage for his order and honor." }

  "Acuro, Sea Captain": { name: "Acuro, Sea Captain", rarity: 4, delay: 2, set: 4, fusion: 0, upgrade: "Acuro, Sea Lord", factions: [0, 10], stages: [
    { stage: 1, attack: 5, health: 15, skills: [{ name: 3, value: 1 }, { name: 10, target: 10, value: 3 }] },
    { stage: 2, attack: 5, health: 16, skills: [{ name: 3, value: 1 }, { name: 10, target: 10, value: 3 }] },
    { stage: 3, attack: 5, health: 17, skills: [{ name: 3, value: 1 }, { name: 10, target: 10, value: 3 }] },
    { stage: 4, attack: 5, health: 18, skills: [{ name: 3, value: 1 }, { name: 10, target: 10, value: 3 }] },
    { stage: 5, attack: 5, health: 18, skills: [{ name: 3, value: 2 }, { name: 10, target: 10, value: 3 }] },
    { stage: 6, attack: 5, health: 18, skills: [{ name: 3, value: 2 }, { name: 10, target: 10, value: 3 }, { name: 11, target: 10, value: 1 }] },
  ]},

  "Acuro, Sea Lord": { name: "Acuro, Sea Lord", rarity: 4, delay: 2, set: 4, fusion: 1, upgrade: "Acuro, Sea King", factions: [0, 10], stages: [
    { stage: 1, attack: 5, health: 18, skills: [{ name: 3, value: 2 }, { name: 10, target: 10, value: 4 }, { name: 11, target: 10, value: 1 }] },
    { stage: 2, attack: 5, health: 19, skills: [{ name: 3, value: 2 }, { name: 10, target: 10, value: 4 }, { name: 11, target: 10, value: 1 }] },
    { stage: 3, attack: 5, health: 20, skills: [{ name: 3, value: 2 }, { name: 10, target: 10, value: 4 }, { name: 11, target: 10, value: 1 }] },
    { stage: 4, attack: 5, health: 21, skills: [{ name: 3, value: 3 }, { name: 10, target: 10, value: 4 }, { name: 11, target: 10, value: 1 }] },
    { stage: 5, attack: 5, health: 21, skills: [{ name: 3, value: 3 }, { name: 10, target: 10, value: 4 }, { name: 11, target: 10, value: 2 }] },
    { stage: 6, attack: 5, health: 21, skills: [{ name: 3, value: 3 }, { name: 10, target: 10, value: 5 }, { name: 11, target: 10, value: 2 }] },
  ]},

  "Acuro, Sea King": { name: "Acuro, Sea King", rarity: 4, delay: 2, set: 4, fusion: 2, factions: [0, 10], stages: [
    { stage: 1, attack: 5, health: 25, skills: [{ name: 3, value: 3 }, { name: 10, target: 10, value: 5 }, { name: 11, target: 10, value: 2 }] },
    { stage: 2, attack: 5, health: 26, skills: [{ name: 3, value: 3 }, { name: 10, target: 10, value: 5 }, { name: 11, target: 10, value: 2 }] },
    { stage: 3, attack: 6, health: 26, skills: [{ name: 3, value: 3 }, { name: 10, target: 10, value: 5 }, { name: 11, target: 10, value: 2 }] },
    { stage: 4, attack: 7, health: 27, skills: [{ name: 3, value: 3 }, { name: 10, target: 10, value: 5 }, { name: 11, target: 10, value: 2 }] },
    { stage: 5, attack: 7, health: 27, skills: [{ name: 3, value: 5 }, { name: 10, target: 10, value: 5 }, { name: 11, target: 10, value: 3 }] },
    { stage: 6, attack: 8, health: 28, skills: [{ name: 3, value: 6 }, { name: 10, target: 10, value: 6 }, { name: 11, target: 10, value: 4 }] },
  ]},
  "Adorabilis": { name: "Adorabilis", rarity: 3, delay: 1, set: 3, fusion: 0, upgrade: "Adorablub", factions: [0, 10], stages: [
    { stage: 1, attack: 2, health:  8, skills: [{ name: 20, value: 1 }, { name: 30, value: 1 }] },
    { stage: 2, attack: 2, health:  9, skills: [{ name: 20, value: 1 }, { name: 30, value: 1 }] },
    { stage: 3, attack: 3, health:  9, skills: [{ name: 20, value: 1 }, { name: 30, value: 1 }] },
    { stage: 4, attack: 3, health:  9, skills: [{ name: 20, value: 1 }, { name: 25, value: 1 }, { name: 30, value: 1 }] },
    { stage: 5, attack: 3, health: 10, skills: [{ name: 20, value: 2 }, { name: 25, value: 1 }, { name: 30, value: 1 }] },
  ]},
  "Adorablub": { name: "Adorablub", rarity: 3, delay: 1, set: 3, fusion: 1, upgrade: "Adorabubble", factions: [0, 10], stages: [
    { stage: 1, attack: 4, health: 11, skills: [{ name: 20, value: 2 }, { name: 25, value: 2 }, { name: 30, value: 1 }] },
    { stage: 2, attack: 4, health: 12, skills: [{ name: 20, value: 2 }, { name: 25, value: 2 }, { name: 30, value: 1 }] },
    { stage: 3, attack: 4, health: 13, skills: [{ name: 20, value: 2 }, { name: 25, value: 2 }, { name: 30, value: 1 }] },
    { stage: 4, attack: 4, health: 13, skills: [{ name: 20, value: 3 }, { name: 25, value: 2 }, { name: 30, value: 1 }] },
    { stage: 5, attack: 4, health: 13, skills: [{ name: 20, value: 3 }, { name: 25, value: 3 }, { name: 30, value: 1 }] },
  ]},
  "Adorabubble": { name: "Adorabubble", rarity: 3, delay: 1, set: 3, fusion: 2, factions: [0, 10], stages: [
    { stage: 1, attack: 5, health: 14, skills: [{ name: 20, value: 4 }, { name: 25, value: 4 }, { name: 30, value: 1 }] },
    { stage: 2, attack: 6, health: 14, skills: [{ name: 20, value: 4 }, { name: 25, value: 4 }, { name: 30, value: 1 }] },
    { stage: 3, attack: 7, health: 15, skills: [{ name: 20, value: 4 }, { name: 25, value: 4 }, { name: 30, value: 1 }] },
    { stage: 4, attack: 7, health: 16, skills: [{ name: 20, value: 5 }, { name: 25, value: 5 }, { name: 30, value: 2 }] },
    { stage: 5, attack: 7, health: 17, skills: [{ name: 20, value: 6 }, { name: 25, value: 7 }, { name: 30, value: 4 }] },
  ]},
  "Aero Enforcer": { name: "Aero Enforcer", rarity: 3, delay: 4, set: 3, fusion: 0, upgrade: "Aero Torcher", factions: [0, 8, 12], stages: [
    { stage: 1, attack: 3, health: 35, skills: [{ name: 3, value: 2 }, { name: 23, value: 2 }, { name: 35, value: 6 }] },
    { stage: 2, attack: 3, health: 35, skills: [{ name: 3, value: 2 }, { name: 23, value: 2 }, { name: 35, value: 5 }] },
    { stage: 3, attack: 3, health: 36, skills: [{ name: 3, value: 2 }, { name: 23, value: 2 }, { name: 35, value: 4 }] },
    { stage: 4, attack: 3, health: 37, skills: [{ name: 3, value: 2 }, { name: 23, value: 2 }, { name: 35, value: 4 }] },
    { stage: 5, attack: 3, health: 38, skills: [{ name: 3, value: 3 }, { name: 23, value: 2 }, { name: 35, value: 4 }] },
  ]},
  "Aero Enforcer": { name: "Aero Enforcer", rarity: 3, delay: 4, set: 3, fusion: 1, upgrade: "Aero Scorcher", factions: [0, 8, 12], stages: [
    { stage: 1, attack: 3, health: 38, skills: [{ name: 3, value: 3 }, { name: 23, value: 3 }, { name: 35, value: 4 }] },
    { stage: 2, attack: 4, health: 39, skills: [{ name: 3, value: 3 }, { name: 23, value: 3 }, { name: 35, value: 4 }] },
    { stage: 3, attack: 4, health: 40, skills: [{ name: 3, value: 3 }, { name: 23, value: 3 }, { name: 35, value: 4 }] },
    { stage: 4, attack: 4, health: 41, skills: [{ name: 3, value: 3 }, { name: 23, value: 3 }, { name: 35, value: 3 }] },
    { stage: 5, attack: 4, health: 42, skills: [{ name: 3, value: 4 }, { name: 23, value: 3 }, { name: 35, value: 3 }] },
  ]},
  "Aero Scorcher": { name: "Aero Scorcher", rarity: 3, delay: 4, set: 3, fusion: 2, factions: [0, 8, 12], stages: [
    { stage: 1, attack: 4, health: 42, skills: [{ name: 3, value: 4 }, { name: 23, value: 4 }, { name: 35, value: 3 }] },
    { stage: 2, attack: 4, health: 43, skills: [{ name: 3, value: 4 }, { name: 23, value: 4 }, { name: 35, value: 2 }] },
    { stage: 3, attack: 4, health: 44, skills: [{ name: 3, value: 4 }, { name: 23, value: 4 }, { name: 35, value: 2 }] },
    { stage: 4, attack: 5, health: 45, skills: [{ name: 3, value: 5 }, { name: 23, value: 4 }, { name: 35, value: 2 }] },
    { stage: 5, attack: 6, health: 46, skills: [{ name: 3, value: 6 }, { name: 23, value: 5 }, { name: 35, value: 2 }] },
  ]}
}
