import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function LoadingScreen() {

    const theme = useContext(ThemeContext);

    return (
        <div className="page-container" style={{background: theme.page_background}}>
            <div className="loader"></div>
        </div>
    )
}