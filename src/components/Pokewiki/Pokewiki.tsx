import React from 'react'
import { PokemonSchema } from '../../types/pokemonSchema'
import PokeList from '../PokeList/PokeList'
import PokeSearchResults from '../PokeSearchResults/PokeSearchResults'
import SearchBox from '../SearchBox/SearchBox'
import './Pokewiki.css'

interface PokeWikiProps {
    searchedPokemons: PokemonSchema[];
    onInputChange:(inputValue: string) => void;
}

const Pokewiki = ({ searchedPokemons,onInputChange } : PokeWikiProps) =>{

    //console.log(searchedPokemons);
    return (
        <div className="pokewiki-container">
            <div className="pokelist-container">
                <SearchBox onInputChange={onInputChange}/>
                <PokeList
                searchedPokemons = {searchedPokemons}
                />
            </div> 
            <div className="pokesearchresult-container">
                <PokeSearchResults/>
            </div>
        </div>
    )
}

export default Pokewiki
