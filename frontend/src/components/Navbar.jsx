import { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';

import './Navbar.css'

const Navbar = () => {

    const { user } = useContext(UserContext);

    function handleClick() {
    }
    return (
        <div className="Navbar">
            <div className="NavbarLinks">
                <Link to="/">
                    Home
                </Link>
                <Link to={`/users/${user.userId}`}>
                    User: {user.userUsername}
                </Link>
                <Link to="/users/create">
                    New User
                </Link>
            </div>
        </div>
    );
};

export default Navbar;