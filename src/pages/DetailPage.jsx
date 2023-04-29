import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { DetailPokemonCard } from "./card/DetailPokemon";
import { GetPokemonDetail } from "./query/PokemonQuery";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function DetailPage(){
    
    const theme = useContext(ThemeContext);

    let {pokemonName} = useParams();
  

    const queryVariable = {
        name: pokemonName
    }

    const {data, loading, error} = useQuery(GetPokemonDetail, {
        variables: queryVariable,
    });

    if(loading){
        return "Loading...";
    } else if(error){
        return <h1>{error.message}</h1>
    }

    return (
        <div className="page-container" style={{background: theme.page_background}}>

            <DetailPokemonCard result={data}/>
        </div>
        )
}
    
export default DetailPage;