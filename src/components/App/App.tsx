import React from "react";
import Pokewiki from "../Pokewiki/Pokewiki";
import { pokemonData } from "../../data/pokemonData";
import './App.css'
class App extends React.Component{
    componentDidMount(){
        const pokeData = pokemonData; 
    }
    render(){
        return(
        <div className="App">
            <h1>PokeWiki</h1>
            <Pokewiki/>
        </div>
        )
    }
    
}


export default App;