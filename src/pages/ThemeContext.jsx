import { createContext } from "react"

export const THEME = {
    default : {

        page_background : "linear-gradient(163deg, #37787d, #d1a966)",
        card_background: "whitesmoke",
        card_move_background: "#2E3840",
        box_shadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        font_color : "black",
        font_color2 : "black",
        font_move_color : "#D3ECA7",
        header_color: "#FDFF00",
        font_pixel: "PokemonPixel",
        font_hollow: "PokemonHollow",
        font_solid: "PokemonSolid",
        empty_heart : "♡",
    },
    zekrom : {

        page_background : "linear-gradient(to right top, #05050b, #111322, #151d37, #14274f, #0b3267)",
        card_background: "rgba(0, 0, 0, 0.6)",
        card_move_background: "#25292e",
        box_shadow: "rgba(149, 157, 165, 0.2) 0px 4px 12px",
        font_color : "whitesmoke",
        font_color2: "#00C5FF",
        font_move_color : "#00C5FF",
        header_color: "#D6FFAD",
        font_pixel: "PokemonPixel",
        font_hollow: "PokemonHollow",
        font_solid: "PokemonSolid",
        empty_heart : "🤍",

    }
}

export const ThemeContext = createContext(THEME.default);