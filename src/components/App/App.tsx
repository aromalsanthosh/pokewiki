import React from "react";
import Pokewiki from "../Pokewiki/Pokewiki";
import { pokemonData } from "../../data/pokemonData";
import './App.css'
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from "../../types/pokemonSchema";

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

    patchPokemonData = (pokemons : UnpatchedPokemonSchema[]):Pok => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined
            };

            try{
                parsedSprites = pokemon.sprites &&  JSON.parse(pokemon.sprites);
            }
            catch(e){
                console.log("Exception while parsing the sprites : ", e);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites
            };

            return patchedPokemon;
        });

        return patchedPokemons;
        
    }

    componentDidMount(){
        const pokeData = pokemonData;
        console.log(pokeData);
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