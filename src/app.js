const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    //made it array .

    // Instead of forloop use Map method
    // Code here
    detailedPlayers=players.map((name,index)=>{
        let type="";
        if(index%2==0){
            type="hero";
        }
        else{
            type="villain"
        }
        return{
            name:name,
            strength:getRandomStrength(),
            image:`images/super-${index+1}.png`,
            type:type,
        }
    })


    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players,  horv) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    const heroAndVillain= players.filter((user)=>user.type== horv)
    const division= heroAndVillain.map((user)=>{
        return `<div class="player">
        <img src="${user.image}" alt="">
        <div class="name">${user.name}</div>
        <div class="strength">${user.strength}</div>
        </div>`
    })
    fragment=division.join("");

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}