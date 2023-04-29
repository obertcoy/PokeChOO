import "../css/DetailCardStyle.css"
import normalType from "../../icon/NormalIC_PE.png"
import fightingType from "../../icon/FightingIC_PE.png"
import flyingType from "../../icon/FlyingIC_PE.png"
import poisonType from "../../icon/PoisonIC_PE.png"
import groundType from "../../icon/GroundIC_PE.png"
import rockType from "../../icon/RockIC_PE.png"
import bugType from "../../icon/BugIC_PE.png"
import ghostType from "../../icon/GhostIC_PE.png"
import steelType from "../../icon/SteelIC_PE.png"
import fireType from "../../icon/FireIC_PE.png"
import waterType from "../../icon/WaterIC_PE.png"
import grassType from "../../icon/GrassIC_PE.png"
import electricType from "../../icon/ElectricIC_PE.png"
import psychicType from "../../icon/PsychicIC_PE.png"
import iceType from "../../icon/IceIC_PE.png"
import dragonType from "../../icon/DragonIC_PE.png"
import darkType from "../../icon/DarkIC_PE.png"
import fairyType from "../../icon/FairyIC_PE.png"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

export function DetailPokemonCard({result}){

    const theme = useContext(ThemeContext);

    if(!result.pokemon.name){
        console.log(result.name);
        return null;
    }

    return (
        <div className='card-container' key={result.pokemon.name} style={{background: theme.card_background}}>
            
            <img src={result.pokemon.sprites.front_default} alt=""></img>

            <div className='card-detail'>

                <h1 style={{color: theme.font_color}}>{result.pokemon.name}</h1>
                <div className="pokemon-types">
                    {result.pokemon.types.map(types=>{
                        if(types.type.name === "normal") return <img src={normalType} alt=""></img>
                        if(types.type.name === "fighting") return <img src={fightingType} alt=""></img>
                        if(types.type.name === "flying") return <img src={flyingType} alt=""></img>
                        if(types.type.name === "poison") return <img src={poisonType} alt=""></img>
                        if(types.type.name === "ground") return <img src={groundType} alt=""></img>
                        if(types.type.name === "rock") return <img src={rockType} alt=""></img>
                        if(types.type.name === "bug") return <img src={bugType} alt=""></img>
                        if(types.type.name === "ghost") return <img src={ghostType} alt=""></img>
                        if(types.type.name === "steel") return <img src={steelType} alt=""></img>
                        if(types.type.name === "fire") return <img src={fireType} alt=""></img>
                        if(types.type.name === "water") return <img src={waterType} alt=""></img>
                        if(types.type.name === "grass") return <img src={grassType} alt=""></img>
                        if(types.type.name === "electric") return <img src={electricType} alt=""></img>
                        if(types.type.name === "psychic") return <img src={psychicType} alt=""></img>
                        if(types.type.name === "ice") return <img src={iceType} alt=""></img>
                        if(types.type.name === "dragon") return <img src={dragonType} alt=""></img>
                        if(types.type.name === "dark") return <img src={darkType} alt=""></img>
                        if(types.type.name === "fairy") return <img src={fairyType} alt=""></img>
                        return null;
                    })}
                </div>
                <h2 style={{color: theme.font_color}}>Moves</h2>
                <div className="pokemon-moves" style={{background: theme.card_move_background}}>
                    {result.pokemon.moves.map(moves => {
                        return <p style={{color: theme.font_move_color}}>{moves.move.name}</p>
                    })}
                </div>
            </div>
        </div>
    )

}