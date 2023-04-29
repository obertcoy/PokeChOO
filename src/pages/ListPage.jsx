import { useQuery } from "@apollo/client";
import { GetAllPokemon } from "./query/PokemonQuery";
import { AllPokemonCard } from "./card/AllPokemon";
import './css/ListPageStyle.css';
import { useContext } from "react";
import { ThemeContext} from "./ThemeContext";

const ListPage = () =>{
    
    const queryVariable = {
        limit: 1281,
        offset: 0
    }

    const {data, loading, error} = useQuery(GetAllPokemon, {
        variables: queryVariable,
    });

    const theme = useContext(ThemeContext);

    if(loading){
        return <div className="loader"></div>;
    } else if(error){
        return <h1>{error.message}</h1>
    }

    return(
    
        <div className="grid-container" style={{background:theme.page_background}}>
            {
                data.pokemons.results.map((result) =>{
                    return <AllPokemonCard result={result} />
                })
            }
        </div>        
        );
}
    
export default ListPage;