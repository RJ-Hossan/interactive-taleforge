
export interface Character {
  name: string;
  age: number;
  gender: string;
  role: string;
  
  appearance: {
    description: string;
    hair: string;
    eyes: string;
    height: string;
    build: string;
    distinctive: string;
  };
  
  background: {
    origin: string;
    keyEvents: string;
    motivation: string;
  };
  
  personality: {
    traits: string[];
    virtues: string;
    flaws: string;
    quote: string;
  };
  
  abilities: {
    skills: string[];
    special: {
      name: string;
      description: string;
    };
    weakness: string;
  };
}
