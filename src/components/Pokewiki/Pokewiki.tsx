import React from 'react'
import { PokemonSchema } from '../../types/pokemonSchema'
import PokeList from '../PokeList/PokeList'
import PokeSearchResults from '../PokeSearchResults/PokeSearchResults'
import SearchBox from '../SearchBox/SearchBox'
import './Pokewiki.css'

interface PokeWikiProps {
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange:(inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokewiki = ({ searchedPokemons,onInputChange, selectedPokemon, onPokemonClick } : PokeWikiProps) =>{

    //console.log(searchedPokemons);
    return (
        <div className="pokewiki-container">
            <div className="pokelist-container">
                <SearchBox onInputChange={onInputChange}/>
                <PokeList
                searchedPokemons = {searchedPokemons}
                onPokemonClick = {onPokemonClick}
                />
            </div> 
            <div className="pokesearchresult-container">
                <PokeSearchResults selectedPokemon={selectedPokemon}/>
            </div>
        </div>
    )
}

export default Pokewiki
