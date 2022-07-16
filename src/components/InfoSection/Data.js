// file where you can pass in a bunch of different values without to hardcode each property
// makes it reusable

export const aboutMe = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headLine: '',
    description: 
    'My first degree was a major in Biology, graduated, but lab work turned out...was not for me. My second degree, was in Occupational Health and Safety, made some good money, but ended up being too stale. Now at 30 years old, I decided that I will become a Software Developer. I graduated from a Programming Bootcamp and loving every minute of it. The limitless potential, the logical thinking and problem solving was enough to ignite a passion in me to become one. I have always wanted to understand how applications on machines just...worked. Today, I am developing them and hopefully be able to continue to do so for startups and large companies.',
    buttonLabel: 'Resume',
    imgStart: true,
    img: require('../../images/svg-1.png'),
    alt: 'Vince',
    dark: true,
    primary: true,
    darkText: false,
    link: 'https://docs.google.com/document/d/1Tnn2t1nFRSSCS88WXW1CRcVkYVvc96_5LOOdNXHxGzg/export?format=pdf',
    // export?format=pdf - allows the link to be a downloadable file
}

export const projectsOne = {
    id: 'projectsOne',
    lightBg: !false,
    lightText: !true,
    lightTextDesc: !true,
    topLine: 'Projects',
    headLine: 'PokéPacks',
    description: 
    'PokéPacks is a web application where you can simulate opening Pokémon Booster packs, as well as track your collection by using the pokemonTCG Api. Remember there was a time, the only thing that mattered was... Pokémon cards!',
    toolStatement: 'Tools used: ',
    toolsUsed: 'React.js, Javascript, Express, MongoDB, Tailwind',
    buttonLabel: 'See Live',
    imgStart: !true,
    img: require('../../images/svg-2.png'),
    alt: 'pokepacks',
    dark: !true,
    primary: !true,
    darkText: !false,
    link: 'https://pokemontcgtracker3.herokuapp.com/home'
}

export const projectsTwo = {
    id: 'projectsTwo',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Projects',
    headLine: 'Plenty of Fish',
    description: 
    'Plenty of Fish is a photo-sharing web application deisgned to support users in organizing and sharing the fish they catch. Each entry allows a user to log specific information about their catch, comment/rate on other users entries, and tell mention if that catch was delicious, thus making it a fun experience for all!',
    toolStatement: 'Tools used: ',
    toolsUsed: 'Python, Django, MongoDB, Tailwind',
    buttonLabel: 'See Live',
    imgStart: true,
    img: require('../../images/svg-3.png'),
    alt: 'plentyfish',
    dark: true,
    primary: true,
    darkText: false,
    link: 'https://plentyfish.herokuapp.com/fishes'
}

export const projectsThree = {
    id: 'projectsThree',
    lightBg: !false,
    lightText: !true,
    lightTextDesc: !true,
    topLine: 'Projects',
    headLine: 'Nine Lives: Marvel Edition',
    description: 
    'NineLives is word guessing web application designed with pure Javascript, HTML, and CSS. A user has nine-attempts to guess the correct letter, and each wrong attempt lowers your lives. Marvel-themed because my wife enjoys Marvel and word guessing games, give it a try!',
    toolStatement: 'Tools used: ',
    toolsUsed: 'Javascript, HTML, CSS',
    buttonLabel: 'See Live',
    imgStart: !true,
    img: require('../../images/svg-4.png'),
    alt: 'ninelives',
    dark: !true,
    primary: !true,
    darkText: !false,
}

