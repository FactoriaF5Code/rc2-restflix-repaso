import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from "../../assets/logo.svg";
import perfil from "../../assets/Jaguar.jpg"
import "./Header.css";
import { Link } from 'react-router-dom';


export const Header = () => {
    return <header>
        <section>
            <img src={logo} alt="Netflix" />
            <ul>
                <Link to="/">Películas</Link>
                <Link to="/tv">Series</Link>
            </ul>
        </section>
        <section>
            <SearchIcon className="lupa" />
            <ul className="ul-header">
                <li>Infantil</li>
            </ul>
            <NotificationsNoneIcon className="campana" />
            <img className="perfil" src={perfil} alt="Perfil" />
        </section>
    </header>
}