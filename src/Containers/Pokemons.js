import React from 'react';
import { connect } from 'react-redux';
import '../styles/Pokemons.css';
import { onDataFetch } from '../actions/pokemons';
import Pokemon from '../Component/Pokemon';
import Loading from '../Component/Loading';

class Pokemons extends React.Component {

    componentDidMount() {
        this.props.onDataFetch();
    }
    render() {
        const { pokemons } = this.props;
        const pokemonsList = pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />);
        return (
            <div className="pokemons">
                {pokemons.length ? pokemonsList : <Loading />}
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return ({
        pokemons: state.pokemons
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDataFetch: () => {
        dispatch(onDataFetch())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);

