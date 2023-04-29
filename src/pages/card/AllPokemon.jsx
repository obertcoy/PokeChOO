import { Link } from 'react-router-dom';
import '../css/CardStyle.css';
import { useState } from 'react';
import { useContext } from "react";
import { ThemeContext } from '../ThemeContext';

export function AllPokemonCard({result}){

    const [isFavorited, setIsFavorited] = useState(localStorage.getItem('favoritePokemons')?.includes(result.name) || false);

    const theme = useContext(ThemeContext);

    const addFavorite = (e) =>{
        
        e.preventDefault();
        let favoriteList = (localStorage.getItem("favoritePokemons"));
        let favoritePokemons;

        if(!favoriteList){
            favoritePokemons = [];
        } else {
            favoritePokemons = JSON.parse(favoriteList);
        }
        
        if(!favoritePokemons.includes(e.target.value)){
            
            favoritePokemons.push(e.target.value);
            localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
            setIsFavorited(true)
        } else {
            const index = favoritePokemons.indexOf(e.target.value);
            if (index !== -1) {
                favoritePokemons.splice(index, 1);
                localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
                setIsFavorited(false)
            }
        }
        console.log(favoritePokemons);

    }



    return (
        <div className='list-card-container' key={result.name} style={{background: theme.card_background}}>

            {!isFavorited ? (theme.empty_heart) : ('❤️')}
            <div className='list-card-detail'>

                <Link to={`/detail/${result.name}`}>
                    <img src={result.image} alt=''></img>
                </Link>
                <p style={{color: theme.font_color2}}>{result.name}</p>
                {!isFavorited ? (<button className='btn btn-outline-primary' value={result.name} onClick={addFavorite}>Add to Favorite</button>)
                : (<button className='btn btn-primary' value={result.name} onClick={addFavorite}>Remove Favorite</button>)}
            </div>
        </div>
    )

}
