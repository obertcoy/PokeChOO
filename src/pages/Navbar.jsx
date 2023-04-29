import { Link, useLocation } from "react-router-dom";
import './css/NavbarStyle.css';
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function NavigationBar({changeTheme}){

    const theme = useContext(ThemeContext);

    const location = useLocation();

    const [activeLink, setActiveLink] = useState(() => {
        if(location.pathname === "/search"){
            return "search"
        } else if(location.pathname === "/"){
            return "list"
        } else if(location.pathname === "/favorite"){
            return "favorite"
        }
    });
    
    

    const handleLinkClick = (link) => {
        setActiveLink(link);
    }


    return (
        <div className="navbar">
            <button onClick={changeTheme}>
                <h1 className="header" style={{color: theme.header_color}}>PokeChOO</h1>
            </button>

            <ul>
                <li>
                    <Link to="/search" className={activeLink === "search" ? "active-link" : "link"} onClick={() => handleLinkClick("search")}>
                        Search
                    </Link>
                </li>
                <li>
                    <Link to="/" className={activeLink === "list" ? "active-link" : "link"} onClick={() => handleLinkClick("list")}>
                        List
                    </Link>
                </li>
                <li>
                    <Link to="/favorite" className={activeLink === "favorite" ? "active-link" : "link"} onClick={() => handleLinkClick("favorite")}>
                        Favorite
                    </Link>
                </li>
            </ul>
               
        </div>

);
}
export default NavigationBar;