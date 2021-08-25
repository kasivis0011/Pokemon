fetchPokemon();

//function to fetch the data from the api
async function fetchPokemon() {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`);
    const pokemons = await data.json();
    pokemons.results.forEach((pokemon) => createPokemon(pokemon));
  } catch (err) {
    console.log(err);
  }
}

//fucntion to fetch Ability from the url obtained from api
async function fetchAbility(url) {
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

//fucntion to fetch Weight from the url obtained from api
async function fecthWeight(url) {
  try {
    const data = await fetch(url);
    const detail = await data.json();
    return detail.weight;
  } catch (err) {
    console.log(err);
  }
}

//creating layout
function createPokemon({ name, url }) {
  //console.log(name);\
  const ability = [];
  try {
    fetchAbility(url).then((result) =>
      result.forEach((ele) => ability.push(ele))
    );
  } catch (err) {
    console.log(err);
  }
  try {
    const weight = fecthWeight(url);
    console.log(weight);
  } catch (err) {
    console.log(err);
  }

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
