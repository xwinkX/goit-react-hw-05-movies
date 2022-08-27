import css from "./Menu.module.css";
import { NavLink } from "react-router-dom";

const getClassname = ({ isActive }) => {
    const ClassName = isActive ? `${css.link} ${css.active}` : `${css.link}`;
    return ClassName;
}

const Menu = () => (
    <ul className={css.ul}>
        <li className={css.li}>
            <NavLink className={getClassname} to="/">Home</NavLink>
        </li>
        <li className={css.li}>
            <NavLink className={getClassname} to="/movies">Movies</NavLink>
        </li>
    </ul>
)

export default Menu;