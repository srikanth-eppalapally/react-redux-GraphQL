const GET_POKEMON_INFO = `
{
    pokemons(first: 150) {
      id
      number
      name,
      image,
      evolutions {
        id,
        number,
        name,
        image
      }
    }
  }`;

export default GET_POKEMON_INFO;