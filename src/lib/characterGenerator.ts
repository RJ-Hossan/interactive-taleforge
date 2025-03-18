
import { Character } from '@/types/character';

// Helper function to get a random item from an array
const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Helper function to get n random items from an array without repetition
const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Lists for random generation
const firstNames = [
  'Aric', 'Elara', 'Thorne', 'Lyra', 'Galen', 'Seraphina', 'Kael', 'Freya', 
  'Aldric', 'Nyla', 'Gareth', 'Isolde', 'Rowan', 'Aria', 'Cedric', 'Elowen',
  'Branimir', 'Faerynn', 'Darian', 'Thalia', 'Orion', 'Morrigan', 'Eamon', 'Elspeth'
];

const lastNames = [
  'Blackwood', 'Silverleaf', 'Stormwind', 'Nightshade', 'Ironheart', 'Ravencrest', 
  'Moonshadow', 'Oakenshield', 'Fireheart', 'Winterborn', 'Thornhelm', 'Swiftblade',
  'Dawnbreaker', 'Starfall', 'Shadowthorn', 'Mistwalker', 'Goldspire', 'Frostgale'
];

const roles = [
  'Skilled Hunter', 'Royal Guard', 'Wandering Minstrel', 'Court Wizard', 
  'Renowned Herbalist', 'Village Outcast', 'Noble Knight', 'Elven Scout',
  'Dwarven Smith', 'Exiled Prince', 'Former Soldier', 'Mysterious Traveler',
  'Beast Tamer', 'Arcane Scholar', 'Master Thief', 'Seafaring Merchant',
  'Vengeful Witch', 'Legendary Bard', 'Forgotten Hero', 'Dragon Slayer'
];

const hairDescriptions = [
  'long, flowing auburn', 'short, messy black', 'braided blonde', 'silver-white',
  'curly red', 'straight dark brown', 'wavy chestnut', 'wild crimson',
  'shaved with tattoos', 'gold with silver streaks', 'shaggy brown', 'raven-black'
];

const eyeColors = [
  'deep blue', 'emerald green', 'amber', 'violet', 'steel gray', 'hazel',
  'icy blue', 'golden', 'dark brown', 'ruby red', 'silver', 'heterochromatic blue and green'
];

const heights = [
  'tall and imposing', 'short but sturdy', 'average height', 'uncommonly tall',
  'petite', 'towering', 'slightly above average', 'diminutive'
];

const builds = [
  'muscular', 'slender and agile', 'stout and strong', 'lithe and graceful',
  'broad-shouldered', 'thin and wiry', 'athletic', 'stocky and powerful'
];

const distinctiveFeatures = [
  'a scar across the cheek', 'intricate tattoos', 'unusually pointed ears',
  'a birthmark resembling a constellation', 'eyes that change color with mood',
  'ceremonial face paint', 'a magical rune etched on the forehead',
  'an enchanted amulet that never leaves their neck', 'scales on parts of their skin',
  'a missing finger replaced with a magical prosthetic', 'wolf-like fangs',
  'hair that glows faintly in the dark'
];

const origins = [
  'raised in a small farming village before disaster struck',
  'born to nobility but rejected their privileged upbringing',
  'grew up among a nomadic tribe of traders and storytellers',
  'found as an infant at the edge of the Enchanted Forest',
  'the last survivor of a mountain settlement destroyed by a dragon',
  'trained from childhood in a secret order of mystics',
  'born during a rare celestial alignment, marked for a special fate',
  'raised by wolf-shifters after being abandoned in the wilderness',
  'a child of two warring kingdoms, never truly belonging to either',
  'grew up in the sprawling capital city, surviving as a street urchin'
];

const keyEvents = [
  'witnessed their mentor\'s murder and swore revenge',
  'discovered an ancient artifact that revealed hidden magical powers',
  'survived a deadly plague that gave them unusual abilities',
  'falsely accused of a crime and spent years seeking to clear their name',
  'saved a powerful noble\'s life and was granted a mysterious boon',
  'lost everything in a catastrophic fire, forging an unbreakable resolve',
  'defeated a legendary beast, earning fame throughout the land',
  'made a pact with a mystical entity in exchange for power',
  'exiled from their homeland for breaking a sacred tradition',
  'found an ancient tome containing forbidden knowledge'
];

const motivations = [
  'seeking redemption for past failures',
  'determined to break a family curse',
  'searching for a lost sibling who disappeared years ago',
  'driven to restore their fallen kingdom to its former glory',
  'hunting the creature that destroyed their village',
  'collecting ancient knowledge to prevent a prophesied disaster',
  'proving their worth to a parent who never believed in them',
  'searching for a cure for a rare magical affliction',
  'seeking to understand the meaning of recurring prophetic dreams',
  'determined to forge a legacy that will outlast the ages'
];

const personalityTraits = [
  'Brave', 'Cautious', 'Curious', 'Reserved', 'Outspoken', 'Compassionate',
  'Calculating', 'Honorable', 'Mischievous', 'Steadfast', 'Ambitious', 'Loyal',
  'Suspicious', 'Adaptable', 'Stoic', 'Witty', 'Charismatic', 'Contemplative',
  'Stubborn', 'Optimistic', 'Cynical', 'Pragmatic', 'Mysterious', 'Bold'
];

const virtues = [
  'unfailing loyalty to friends and allies',
  'relentless determination in the face of adversity',
  'boundless compassion for those in need',
  'unwavering honesty, even when inconvenient',
  'remarkable patience when teaching others',
  'incredible generosity with both possessions and time',
  'deep respect for all living creatures',
  'inspiring courage that motivates others to action',
  'masterful self-discipline in all endeavors',
  'profound wisdom beyond their years'
];

const flaws = [
  'crippling fear of deep water since a childhood incident',
  'stubborn refusal to ask for help, even when necessary',
  'burning desire for revenge that clouds judgment',
  'inability to resist a challenge to their honor',
  'deep-seated distrust of authority figures',
  'overwhelming pride that prevents admitting mistakes',
  'tendency to make promises they cannot keep',
  'haunted by vivid nightmares of past failures',
  'difficulty controlling their temper when provoked',
  'struggles with an addiction to a magical substance'
];

const quotes = [
  'The stars may guide our path, but we choose where to step.',
  'Fear is just courage that hasn\'t found its way yet.',
  'In the shadows, I found my true strength.',
  'Not all who wander the wilderness are truly lost.',
  'The strongest sword is forged in the hottest fire.',
  'Magic flows through all things, even in those who deny it.',
  'Today\'s enemy might be tomorrow\'s ally. Choose your battles wisely.',
  'I\'ve seen enough darkness to recognize the true value of light.',
  'Legends are just truths that time has twisted.',
  'The difference between a hero and a fool is often just good fortune.'
];

const skills = [
  'tracking prey through any terrain',
  'identifying poisonous plants and crafting antidotes',
  'deciphering ancient languages and runes',
  'navigating by the stars even on cloudy nights',
  'crafting intricate mechanical devices',
  'mimicking any sound or voice with uncanny accuracy',
  'blending into crowds and becoming forgettable',
  'taming wild beasts with patience and respect',
  'negotiating favorable terms in any bargain',
  'brewing potent elixirs from common ingredients',
  'storytelling that captivates even hostile audiences',
  'picking any lock with minimal tools',
  'predicting weather changes hours in advance',
  'creating detailed maps from memory',
  'fighting blindfolded through sound alone',
  'treating wounds with field medicine',
  'detecting lies through subtle facial cues'
];

const specialAbilities = [
  {
    name: 'Shadow Step',
    description: 'Can momentarily step into shadows and emerge from another shadow within sight.'
  },
  {
    name: 'Beast Speech',
    description: 'Able to communicate with animals, though not control them.'
  },
  {
    name: 'Ember Touch',
    description: 'Can ignite small fires with bare hands when emotions run high.'
  },
  {
    name: 'Memory Mirror',
    description: 'Can perfectly recall and recreate any scene witnessed, no matter how briefly.'
  },
  {
    name: 'True Sight',
    description: 'Occasionally glimpses the true form of disguised creatures or magical illusions.'
  },
  {
    name: 'Soul Echo',
    description: 'Can sense emotional imprints left in locations where intense feelings occurred.'
  },
  {
    name: 'Vigor Surge',
    description: 'In dire circumstances, can push beyond physical limits without fatigue for short periods.'
  },
  {
    name: 'Fate Whisper',
    description: 'Dreams provide cryptic glimpses of significant future events.'
  },
  {
    name: 'Ætheric Attunement',
    description: 'Can sense magical energies and determine their general purpose.'
  },
  {
    name: 'Mind Shield',
    description: 'Possesses natural resistance to mind-affecting magic and influence.'
  }
];

const weaknesses = [
  'loses all power in the presence of cold iron',
  'physically weakened when cut off from nature for extended periods',
  'must speak the truth when directly asked a question under moonlight',
  'vulnerable to a rare poison with no known antidote',
  'haunted by spirits only they can see during twilight hours',
  'magical abilities become unpredictable during storms',
  'compelled to fulfill any promise made, no matter the cost',
  'temporarily blinded when exposed to powerful magic',
  'cannot cross running water without assistance',
  'experiences the pain of any creature they\'ve formed a bond with'
];

export const generateRandomCharacter = (): Character => {
  const firstName = getRandomItem(firstNames);
  const lastName = getRandomItem(lastNames);
  const age = Math.floor(Math.random() * 30) + 18; // Between 18 and 47
  const genders = ['male', 'female', 'non-binary'];
  const gender = getRandomItem(genders);
  
  return {
    name: `${firstName} ${lastName}`,
    age,
    gender,
    role: getRandomItem(roles),
    
    appearance: {
      description: `${firstName} has ${getRandomItem(hairDescriptions)} hair and ${getRandomItem(eyeColors)} eyes. They are ${getRandomItem(heights)} with a ${getRandomItem(builds)} build.`,
      hair: getRandomItem(hairDescriptions),
      eyes: getRandomItem(eyeColors),
      height: getRandomItem(heights),
      build: getRandomItem(builds),
      distinctive: getRandomItem(distinctiveFeatures)
    },
    
    background: {
      origin: getRandomItem(origins),
      keyEvents: getRandomItem(keyEvents),
      motivation: getRandomItem(motivations)
    },
    
    personality: {
      traits: getRandomItems(personalityTraits, 4),
      virtues: getRandomItem(virtues),
      flaws: getRandomItem(flaws),
      quote: getRandomItem(quotes)
    },
    
    abilities: {
      skills: getRandomItems(skills, 3),
      special: getRandomItem(specialAbilities),
      weakness: getRandomItem(weaknesses)
    }
  };
};
