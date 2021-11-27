import React from "react";
import Pokewiki from "../Pokewiki/Pokewiki";
import { pokemonData } from "../../data/pokemonData";
import './App.css'

//interface AppState (general convention name of component followed by state)


interface AppState {
    searchField: string;
    allPokemon: any;
    searchPokemons: any;
    selectedPokemon: any;
}
                                 //prop,state type
class App extends React.Component <any,AppState>{

    state = {
        searchField: "",
        allPokemon: [],
        searchPokemons: [],
        selectedPokemon: undefined
    }
    componentDidMount(){
        //const pokeData = pokemonData; 
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