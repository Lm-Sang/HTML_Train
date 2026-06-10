const typeColors = new Map([
  ["normal", "#A8A878"],
  ["fire", "#ff421c"],
  ["water", "#6890F0"],
  ["electric", "#F8D030"],
  ["grass", "#78C850"],
  ["ice", "#98D8D8"],
  ["fighting", "#C03028"],
  ["poison", "#A040A0"],
  ["ground", "#E0C068"],
  ["flying", "#A890F0"],
  ["psychic", "#F85888"],
  ["bug", "#A8B820"],
  ["rock", "#B8A038"],
  ["ghost", "#705898"],
  ["dragon", "#7038F8"],
  ["dark", "#705848"],
  ["steel", "#B8B8D0"],
  ["fairy", "#EE99AC"],
]);

const statsColors = new Map([
  ["hp", "#ff5959"],
  ["attack", "#f5ac78"],
  ["defense", "#fae078"],
  ["special-attack", "#9db7f5"],
  ["special-defense", "#a7db8c"],
  ["speed", "#fa92b2"],
]);

const backBtn = document.querySelector(".back-btn");
const pokemon = document.querySelector(".poke-detail");
backBtn.addEventListener("click", () => {
  window.history.back();
});
const selectedPokemon = JSON.parse(localStorage.getItem("selectedPokemon"));
let img = "";
pokemon.innerHTML = "";
img = `<div class="poke-img">
          <img src="${selectedPokemon.sprites.front_default}" alt="${selectedPokemon.name}" />
        </div>
        <div class="poke-type">
          ${selectedPokemon.types
            .map(
              (typeInfo) =>
                `<span style="background-color: ${typeColors.get(
                  typeInfo.type.name,
                )}">${typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}</span>`,
            )
            .join("")}
        </div>
        <div class="poke-name">
          <h1>${selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</h1>
        </div>
        <div class="height-weight">
          <p>Height<span>${selectedPokemon.height}</span></p>
          <p>Weight<span>${selectedPokemon.weight}</span></p>
        </div>
        <div class="abilities">
          <p>Abilities</p>
          <div>
          ${selectedPokemon.abilities
            .map(
              (abilityInfo) =>
                `<span>${abilityInfo.ability.name.charAt(0).toUpperCase() + abilityInfo.ability.name.slice(1)}</span>`,
            )
            .join("")}
          </div>
        </div>
        <div class="stats">
            <p>Stats</p>
            <div class="stats-list">
          ${selectedPokemon.stats
            .map(
              (statInfo) => `<div>
            <span class = "stat-label" style="background-color: ${statsColors.get(statInfo.stat.name)}">${statInfo.stat.name === "special-attack" ? "spa" : statInfo.stat.name === "special-defense" ? "spd" : statInfo.stat.name.slice(0, 3)}</span>
            <span class = "stat-value">${statInfo.base_stat}</span>
          </div>`,
            )
            .join("")}
            </div>
        </div>
      `;
pokemon.innerHTML += img;
