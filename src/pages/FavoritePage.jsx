import { useQuery } from "@apollo/client";
import { GetPokemonDetail } from "./query/PokemonQuery";
import { FavoritePokemonCard } from "./card/FavoritePokemon";
import { useState } from "react";
import './css/ListPageStyle.css';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function FavoritePokemonGrid ({pokemon, removeFavorite}){
    
    const queryVariable = {
        name: pokemon
    }

    const {data, loading, error} = useQuery(GetPokemonDetail, {
        variables: queryVariable,
    });

    if(loading){
        return <div className="loader"></div>;

    } else if(error){
        return <h1>{error.message}</h1>
    }
    return <FavoritePokemonCard result={(data)} removePokemon={removeFavorite} />
}

export default function FavoritePage(){

    const theme = useContext(ThemeContext);

    let [favoriteList, setFavoriteList] = useState(JSON.parse(localStorage.getItem("favoritePokemons")));
    
    const removeFavorite = (removePokemon) =>{
        console.log("Removal working...");
        console.log(removePokemon);
        const newFavoriteList = favoriteList.filter(pokemon => pokemon !== removePokemon)
        setFavoriteList(newFavoriteList);
        localStorage.setItem("favoritePokemons", JSON.stringify(newFavoriteList));
    }
    
    console.log(favoriteList);
    console.log("Local Storage:",JSON.parse(localStorage.getItem("favoritePokemons")));
    if(favoriteList){

        return (
            <div className="grid-container" style={{background: theme.page_background}}>
            
            {favoriteList.map((pokemon) =>{
                
                return <FavoritePokemonGrid pokemon={pokemon} removeFavorite = {removeFavorite} />
            })}
        </div>
        )
    } else {
        return (
            <h1>No Data...</h1>
        )
    }

}

