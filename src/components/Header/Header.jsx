import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo/spotify-logo.png"

const Header = () => {

    return (
        <div className="header">
            <Link to="/"><img src={imgLogo} alt="Logo do Spotify" /></Link>
            <Link className="header__link" to="/"><h1>Spotify</h1></Link>
        </div>
    )
}

export default Header;