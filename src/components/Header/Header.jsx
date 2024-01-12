import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from "../../assets/logo.svg";
import perfil from "../../assets/Jaguar.jpg"
import "./Header.css";


export const Header = () => {
    return <header>
        <section>
            <img src={logo} alt="Netflix" />
            <ul>
                <li>Inicio</li>
                <li>Series</li>
                <li>Películas</li>
                <li>Novedades más vistas</li>
                <li>Mi lista</li>
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