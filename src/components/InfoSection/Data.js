// file where you can pass in a bunch of different values without to hardcode each property
// makes it reusable

//Second Page
export const homeObjOne = {
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
}

export const projects = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Projects',
    headLine: 'PokéPacks',
    description: 
    'PokéPacks is a web application where you can simulate opening Pokémon Booster packs, as well as track your collection. Remember there was a time, the only currency that mattered was... Pokémon cards!',
    buttonLabel: 'See Live',
    imgStart: false,
    img: require('../../images/svg-2.png'),
    alt: 'Vince',
    dark: false,
    primary: false,
    darkText: true,
}