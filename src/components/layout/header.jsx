import { Link, NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/product">products</NavLink></li>

        </ul>

    )
}
export default Header;