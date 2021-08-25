// fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
//   .then((data) => data.json())
//   .then((detail) =>
//     detail.results.forEach((element) => {
//       createPokemon(element);
//       //console.log(element);
//     })
//   );

fetchPokemon();
async function fetchPokemon() {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    const pokemons = await data.json();
    pokemons.results.forEach((pokemon) => createPokemon(pokemon));
    // pokemons.results.forEach((pokemon) => console.log(pokemon));
  } catch (err) {
    console.log(err);
  }
}

async function getDetails(url) {
  try {
    const data = await fetch(url);
    const detail = await data.json();
    const OverAllResult = [];
    const Abil = [];
    detail.abilities.forEach((ele) => Abil.push(ele.ability.name));
    return Abil;
    //console.log(Abil);
    //.then((det) => console.log(det.moves));
    //.then((det) => console.log(det.name, det.weight));
    // const Abil = detail.abilities.forEach((ele) => ele.ability.name);
    // console.log(Abil);
  } catch (err) {
    console.log(err);
  }
}

function createPokemon({ name, url }) {
  //console.log(name);\
  const ability = [];
  let abilstring = "";
  try {
    getDetails(url).then((result) =>
      result.forEach((ele) => ability.push(ele))
    );
    abilstring = ability.toString();
    console.log(abilstring);
  } catch (err) {
    console.log(err);
  }

  //console.log(ability);
  const info = document.createElement("div");
  info.setAttribute("class", "container");

  info.innerHTML = `
  <div class="main-container">
       

  
  <div class="details">
    <h2>Name: ${name}</h2>
    <p><b>Weight:</b></p>
    <p><b>Moves:</b></p>  
    <p><b>Ability:</b>${abilstring}</p>
    </div>
  </div>
`;
  document.body.append(info);
}
