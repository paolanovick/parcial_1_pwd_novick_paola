fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
  .then(response => response.json())
  .then(data => {
    const pokemonContainer = document.getElementById('pokemon-container');
    
    data.results.forEach(pokemon => {
      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add('pokemon-card');
      pokemonCard.textContent = pokemon.name; // Puedes cambiar esto según los datos que quieras mostrar
      
      pokemonContainer.appendChild(pokemonCard);
    });
  })
  .catch(error => {
    console.error('Error al obtener los Pokémon:', error);
  });


