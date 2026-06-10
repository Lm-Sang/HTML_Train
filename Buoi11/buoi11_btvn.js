function fetchData(URL) {
  return new Promise(function (resolve) {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => console.error("Error fetching data:", error));
  });
}

async function main() {
  let pokemons = [];
  const data = await fetchData(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=898",
  );

  pokemons = data.results;
  const pokemonData = pokemons.map((pokemon) => fetchData(pokemon.url));
  const pokemonDetails = await Promise.all(pokemonData);
  const pokemonList = document.querySelector(".poke-list");
  const button = document.querySelector(".button");
  const searchInput = document.getElementById("search-input");
  let size = 30;
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

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function renderPokemon(data, size) {
    let img = "";
    pokemonList.innerHTML = "";
    for (let i = 0; i < size; i++) {
      img += `<div class="poke-item">
        <div class="poke-id"> #${data[i].id}</div>
        <img src="${data[i].sprites.front_default}">
        <b>${capitalize(data[i].name)}</b>
        <div class="poke-type">
          ${data[i].types
            .map(
              (type) =>
                `<span class="type" style="background-color: ${typeColors.get(type.type.name) || "#ccc"};">${capitalize(type.type.name)}</span>`,
            )
            .join("")}
        </div>
      </div>`;
    }
    pokemonList.innerHTML = img;
    const pokeItem = document.querySelectorAll(".poke-item");
    pokeItem.forEach((item) => {
      item.addEventListener("click", function (event) {
        if (event.target.closest(".poke-item")) {
          const selectedPokemon = event.target.closest(".poke-item");
          const pokemonId = selectedPokemon
            .querySelector(".poke-id")
            .textContent.trim()
            .substring(1);
          const pokemon = pokemonDetails.find(
            (p) => p.id === parseInt(pokemonId),
          );
          localStorage.setItem("selectedPokemon", JSON.stringify(pokemon));
          window.location.href = "./detail.html";
        }
      });
    });
  }
  renderPokemon(pokemonDetails, size);

  button.addEventListener("click", function () {
    size += 30;
    if (size > pokemonDetails.length) {
      size = pokemonDetails.length;
    }
    renderPokemon(pokemonDetails, size);
  });

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = pokemonDetails.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm),
    );
    if (filteredData.length == 0) {
      pokemonList.innerHTML = `<p>No pokemon match with "${searchTerm}"</p>`;
      button.style.display = "none";
      return;
    } else {
      button.style.display = "flex";
    }
    if (searchInput.value == "") {
      return renderPokemon(pokemonDetails, size);
    }
    renderPokemon(filteredData, filteredData.length);
  });
}
main();
