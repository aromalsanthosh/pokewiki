import React from 'react'
import PokeList from '../PokeList/PokeList'
import PokeSearchResults from '../PokeSearchResults/PokeSearchResults'
import SearchBox from '../SearchBox/SearchBox'
import './Pokewiki.css'

const Pokewiki = () =>{
    return (
        <div className="pokewiki-container">
            <div className="pokelist-container">
                <SearchBox/>
                <PokeList/>
            </div> 
            <div className="pokesearchresult-container">
                <PokeSearchResults/>
            </div>
        </div>
    )
}

export default Pokewiki
