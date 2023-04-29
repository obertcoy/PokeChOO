import React, { useState } from "react";
import "./css/SearchPageStyle.css"
import search from "../icon/search.png"
import { DetailPokemonCard } from "./card/DetailPokemon";
import { useQuery } from "@apollo/client";
import { GetPokemonDetail } from "./query/PokemonQuery";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function SearchPokemonDetail({pokemon}){
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

    return <DetailPokemonCard result={data}/>

}

const SearchPage = () =>{

    const theme = useContext(ThemeContext);
    
    const [searchPokemon, setSearchPokemon] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setSearchPokemon(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return(
        <div className="page-container" style={{background: theme.page_background}}>
            <form onSubmit={handleSubmit} className="search-container">
                <input type="text" placeholder="Search..." value={searchPokemon} onChange={handleChange}></input> 
                <button><img src={search} alt=""></img></button>
            </form>

            {isSubmitted && 
                <SearchPokemonDetail pokemon={searchPokemon} />}

        </div>

        );
}
    
export default SearchPage;