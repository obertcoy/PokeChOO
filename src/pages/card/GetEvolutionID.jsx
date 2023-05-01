import { useQuery } from "@apollo/client";
import { GetEvolutionID } from "../query/PokemonQuery"

// On Progress
function EvolutionID(){

    const {data, loading, error} = useQuery(GetEvolutionID, {
    });

    if(loading){
        return "Loading...";
    } else if(error){
        return <h1>{error.message}</h1>
    }

    console.log(data);

    return data
}

export default EvolutionID