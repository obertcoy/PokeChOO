import { Link } from 'react-router-dom';
import '../css/CardStyle.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export function FavoritePokemonCard({result, removePokemon}){

    const theme = useContext(ThemeContext);

    const removeFavorite = (e) =>{
        console.log("Remove:",e.target.value);
        removePokemon(e.target.value);
    }

    return (
        <div className='list-card-container' key={result.pokemon.name} style={{background: theme.card_background}}>

            <div className='list-card-detail'>

                <Link to={`/detail/${result.pokemon.name}`}>
                    <img src={result.pokemon.sprites.front_default} alt=''></img>
                </Link>
                <p style={{color: theme.font_color2}}>{result.pokemon.name}</p>
                <button className='btn btn-outline-primary' value={result.pokemon.name} onClick={removeFavorite} >Remove Favorite</button>
            </div>
        </div>
    )

}
