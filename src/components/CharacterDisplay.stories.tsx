import React from "react";

import { PowerBarsCharacterData } from "../types";
import CharacterDisplay from "./CharacterDisplay";
import { characterDataSnapshot } from "./CharacterDisplayMockData";

export default { title: "Character Display" };

export const realisticTitan = () => (
  <CharacterDisplay data={characterDataSnapshot} />
);

const mockData: PowerBarsCharacterData = {
  character: {
    membershipType: 3,
    membershipId: "123",
    characterId: "456",
    emblemColor: {
      red: 7,
      green: 5,
      blue: 43,
      alpha: 255
    },
    emblemBackgroundPath:
      "/common/destiny2_content/icons/3d0142ffcf985e9fab3d3e7d89ec192c.jpg"
  },

  className: "warlock",

  title: "Test Title",

  emblemMetrics: {
    name: "Total Final Blows",
    icon: "/common/destiny2_content/icons/e7eadf253fdf8e1a60edd7fb9ec1e4af.png",
    iconSequences: [
      {
        frames: [
          "/common/destiny2_content/icons/e7eadf253fdf8e1a60edd7fb9ec1e4af.png",
          "/common/destiny2_content/icons/9662e47f74160f8142210bceb0874443.png"
        ]
      }
    ],
    value: 492656,
    complete: true,
    visible: true
  },

  overallPower: 929,
  overallPowerExact: 929 + 2 / 8,
  potentialOverallPower: 930,

  topItemBySlot: {
    kinetic: {
      itemHash: 1,
      instanceData: {
        primaryStat: {
          value: 942
        }
      },
      itemDefinition: {
        displayProperties: {
          icon:
            "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg"
        }
      }
    },
    energy: {
      itemHash: 1,
      instanceData: {
        primaryStat: {
          value: 940
        }
      },
      itemDefinition: {
        displayProperties: {
          icon:
            "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg"
        }
      }
    },
    power: {
      itemHash: 1,
      instanceData: {
        primaryStat: {
          value: 938
        }
      },
      itemDefinition: {
        displayProperties: {
          icon:
            "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg"
        }
      }
    },
    head: {
      itemHash: 1,
      instanceData: {
        primaryStat: {
          value: 936
        }
      },
      itemDefinition: {
        displayProperties: {
          icon:
            "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg"
        }
      }
    },
    gloves: {
      itemHash: 1,
      instanceData: {
        primaryStat: {
          value: 934
        }
      },
      itemDefinition: {
        displayProperties: {
          icon:
            "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg"
        }
      }
    },
    chest: {
      itemHash: 1,
      instanceData: {
        primaryStat: {
          value: 924
        }
      },
      itemDefinition: {
        displayProperties: {
          icon:
            "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg"
        }
      }
    },
    legs: {
      itemHash: 1,
      instanceData: {
        primaryStat: {
          value: 922
        }
      },
      itemDefinition: {
        displayProperties: {
          icon:
            "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg"
        }
      }
    },
    classItem: {
      itemHash: 1,
      instanceData: {
        primaryStat: {
          value: 920
        }
      },
      itemDefinition: {
        displayProperties: {
          icon:
            "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg"
        }
      }
    }
  },
  artifactData: {
    bonusPower: 12,
    iconPath:
      "/common/destiny2_content/icons/a622e55eb4a599a6b16d9b8b2f74ca73.jpg",
    name: "Test Artifact",
    nextLevelAt: 100,
    progressToNextLevel: 97
  }
};

export const mockWarlock = () => <CharacterDisplay data={mockData} />;
