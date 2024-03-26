const container = document.querySelector('#pokeContainer')
let pokes = null
let score = 0
async function getPokemons() {
        let gene = randomize(1, 151)
        container.innerHTML = ""
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + gene)
        let data = await response.json()
        pokes = data
        console.log(data);
        const para = document.createElement('p')
        para.textContent = data.name
        const img = document.createElement('img')
        img.classList.add("imgPoke")
        img.src = data.sprites.other.dream_world.front_default
        container.appendChild(para)
        container.appendChild(img)
   
}

getPokemons()
function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function valide() {
   if (document.querySelector("#pokeName").value == pokes.name) {
    score ++
    document.querySelector("#score").innerHTML = score;
    document.querySelector("#result").innerHTML = "Gagné";
   }else{
    document.querySelector("#result").innerHTML = "Perdu";
  
   }
  
   console.log(pokes.name);
   getPokemons()
}
