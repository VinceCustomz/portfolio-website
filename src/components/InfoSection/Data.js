// file where you can pass in a bunch of different values without to hardcode each property
// makes it reusable

export const aboutMe = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headLine: "",
  description:
    "I am a BSci holder with years of experience in Occupational Health & Safety. I have decided to take that experience and develop my skills as a Software Engineer.",
  description2:
    "I am a recent graduate of General Assembly's Software Development Bootcamp. The logical thinking and problem solving was enough to ignite a passion to develop my skills. I have always wanted to understand how applications on the front end and the back end worked, and it has been a thrill to develop the skills to create both.",
  buttonLabel: "Resume",
  imgStart: true,
  img: require("../../images/svg-1.png"),
  alt: "Vince",
  dark: true,
  primary: true,
  darkText: false,
  link: require("../../images/Resume.pdf"),
  // link: "https://docs.google.com/document/d/1Tnn2t1nFRSSCS88WXW1CRcVkYVvc96_5LOOdNXHxGzg/export?format=pdf",
  // export?format=pdf - allows the link to be a downloadable file
};
export const calorieTracker = {
  id: "calorieTracker",
  lightBg: !false,
  lightText: !true,
  lightTextDesc: !true,
  imgStart: !true,
  dark: !true,
  primary: !true,
  darkText: !false,
  topLine: "Projects",
  headLine: "Calorie Tracker",
  description:
    "Our nutrition tracker is simple: you can collect, submit and analyze your food intake patterns Amid all the meals, we fail to understand the amount of nutrition we consume daily. Protein, carbohydrates, fat, and calories have a specific impact on the human body. And to stay healthy, one should eat healthily. However, keeping track of the diet manually on either paper or digitally both have the same intention.",
  toolStatement: "Tools used: ",
  toolsUsed: "Python, Django, Tailwind, Javascript, HTML, CSS, Charts.js, SQL",
  buttonLabel: "See Live",
  img: require("../../images/CalorieLog.PNG"),
  alt: "calorieTracker",
  link: "https://calorielog.herokuapp.com",
};
export const plentyFish = {
  id: "plentyFish",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  imgStart: true,
  dark: true,
  primary: true,
  darkText: false,
  topLine: "Projects",
  headLine: "Plenty Fish Tracker",
  description:
    "Plenty of Fish is a photo-sharing web application deisgned to support users in organizing and sharing the fish they catch. Each entry allows a user to log information, comment/rate on other users entries, and mention if that catch was delicious, thus making a fun experience for all!",
  toolStatement: "Tools used: ",
  toolsUsed: "Python, Django, MongoDB, Tailwind",
  buttonLabel: "See Live",
  img: require("../../images/svg-3.png"),
  alt: "plentyfish",
  link: "https://plentyfish.herokuapp.com/fishes",
};

export const pokePacks = {
  id: "pokePacks",
  lightBg: !false,
  lightText: !true,
  lightTextDesc: !true,
  imgStart: !true,
  dark: !true,
  primary: !true,
  darkText: !false,
  topLine: "Projects",
  headLine: "PokéPacks",
  description:
    "PokéPacks is a web application where you can simulate opening Pokémon Booster packs, as well as track your collection by using the pokemonTCG Api. Remember there was a time, the only thing that mattered was... Pokémon cards!",
  toolStatement: "Tools used: ",
  toolsUsed: "React.js, Javascript, Express, MongoDB, Tailwind",
  buttonLabel: "See Live",
  img: require("../../images/svg-2.png"),
  alt: "pokepacks",
  link: "https://pokemontcgtracker3.herokuapp.com/home",
};


export const nineLives = {
  id: "nineLives",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  imgStart: true,
  dark: true,
  primary: true,
  darkText: false,
  topLine: "Projects",
  headLine: "Nine Lives: Marvel Edition",
  description:
    "NineLives is word guessing web application designed with pure Javascript, HTML, and CSS. A user has nine-attempts to guess the correct letter, and each wrong attempt lowers your lives. Marvel-themed because my wife enjoys Marvel and word guessing games, give it a try!",
  toolStatement: "Tools used: ",
  toolsUsed: "Javascript, HTML, CSS",
  buttonLabel: "See Live",
  img: require("../../images/svg-4.png"),
  alt: "ninelives",
};
