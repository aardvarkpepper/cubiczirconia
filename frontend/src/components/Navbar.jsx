import { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

import './Navbar.css'

const Navbar = () => {

    const { user } = useContext(UserContext);

    // function handleClick() {
    // }
    return (
        <div className="Navbar">
            <div className="NavbarLinks">
                <Link to="/" className="inlineComponent">
                    Home
                </Link>
                <Link to={`/users/${user.userId}`} className="inlineComponent">
                    User: {user.userUsername}
                </Link>
                <Link to="/users/create" className="inlineComponent">
                    New User
                </Link>
            </div>
        </div>
    );
};

export default Navbar;