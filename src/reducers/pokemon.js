const initialState = {
    pokemons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POKEMONS':
            console.log(action);
            return Object.assign({}, state, {
                pokemons: action.pokemons
            });
        default:
            return state;
    }
};

export default reducer;