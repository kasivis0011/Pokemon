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

async function getAbility(url) {
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

async function fetchweight(url) {
  try {
    const data = await fetch(url);
    const detail = await data.json();
    console.log(detail.weight);
  } catch (err) {
    console.log(err);
  }
}

function createPokemon({ name, url }) {
  //console.log(name);\
  const ability = [];
  try {
    getAbility(url).then((result) =>
      result.forEach((ele) => ability.push(ele))
    );
  } catch (err) {
    console.log(err);
  }
  const weight = fetchweight(url);
  const info = document.createElement("div");
  info.setAttribute("class", "container");

  info.innerHTML = `
    <div class="main-container"> 
        <div class="details">
            <h2>Name : ${name}</h2>
            <p><b>Weight :</b> ${weight}</p>
            <p><b>Ability :</b>${ability}</p>
            <p><b>Moves :</b></p>             
        </div>
    </div>
`;
  document.body.append(info);
}
