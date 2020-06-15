import axios from 'axios';

const axiosPokemanGraphQL = axios.create({
    baseURL: 'https://graphql-pokemon.now.sh/',
});


export default axiosPokemanGraphQL



