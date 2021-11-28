import React from "react";
import Pokewiki from "../Pokewiki/Pokewiki";
import { pokemonData } from "../../data/pokemonData";
import './App.css'
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from "../../types/pokemonSchema";
import PokeLogo from "../../assets/logo.png";
//interface AppState (general convention name of component followed by state)

export interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchedPokemons: [],
        selectedPokemon: undefined,
    };

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("Exception while parsing sprites: ", e);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites,
            };

            return patchedPokemon;
        });

        return patchedPokemons;
    };

    componentDidMount() {
        // patch the stringified pokemons
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );

        // Update the state with patched pokemons
        this.setState({
            allPokemons: patchedPokemons,
            searchedPokemons: patchedPokemons,
        });
    }

    handleInputChange = (inputValue : string)=>{
        //console.log(`input value from App.tsx : ${inputValue}`);

        //filter search results
        const { allPokemons } = this.state;

        const searchedPokemons = allPokemons.filter(
            (pokemon: PokemonSchema)=>{
                return(
                    pokemon.name &&
                    pokemon.name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                );
            }
        );
        this.setState(
            {
                searchField: inputValue,
                searchedPokemons: searchedPokemons
            });
        
    }

    handleClick = (pokemonName: string)=>{
        const {allPokemons} = this.state;

        // find selected pokemon from allpokemons
        const selectedPokemon = allPokemons.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName

        )
        //update state

        this.setState({selectedPokemon});
    }

    render(){
        return(
        <div className="App">
            {/* <h1>PokeWiki</h1> */}
            <img className="logo" src={PokeLogo} alt="logo" />
            <Pokewiki
                searchedPokemons={this.state.searchedPokemons}
                selectedPokemon = {this.state.selectedPokemon}
                onInputChange = {this.handleInputChange}
                onPokemonClick = {this.handleClick}
            />
            <div className="footer-container">
                <p className="footer-text">
                Made with ❤️ by <a href="https://aromalsanthosh.tech"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                >Aromal S</a>
                </p>
            </div>
        </div>
        )
    }
    
}


export default App;