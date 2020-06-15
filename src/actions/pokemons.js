import axiosPokemanGraphQL from '../api/getApiData';
import GET_POKEMON_INFO from '../api/pokemons_query';


export const onDataFetch = () => {
    return (dispatch) => {
        return axiosPokemanGraphQL
            .post('', { query: GET_POKEMON_INFO })
            .then(result =>
                dispatch({ type: 'GET_POKEMONS', pokemons: result.data.data.pokemons }));
    }
}