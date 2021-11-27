import React from "react";
import Pokewiki from "../Pokewiki/Pokewiki";
import { pokemonData } from "../../data/pokemonData";
import './App.css'
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from "../../types/pokemonSchema";

//interface AppState (general convention name of component followed by state)

interface AppState {
    searchField: string;
    allPokemon: PokemonSchema[];
    searchPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}
                                 //prop,state type
class App extends React.Component <any,AppState>{

    state = {
        searchField: "",
        allPokemon: [],
        searchPokemons: [],
        selectedPokemon: undefined
    }

    patchPokemonData = (pokemons : UnpatchedPokemonSchema[]) => {
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
        //Patch the stringified pokemon sprites
        const patchedPokemons:PokemonSchema[] = this.patchPokemonData(pokemonData);
        //console.log("Patched pokemons : ", patchedPokemons);
        
        //Update the state with patched pokemons
        this.setState({
            allPokemon: patchedPokemons,
            searchPokemons: patchedPokemons
        });
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