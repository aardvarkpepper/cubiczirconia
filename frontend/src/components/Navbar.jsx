//import { useContext } from 'react';
import { Link } from "react-router-dom";
//import { UserContext } from '../contexts/UserContext';

import './Navbar.css'

const Navbar = () => {

 //   const { user } = useContext(UserContext);

    return (
        <div className="Navbar">
            <div className="NavbarLinks">
                <Link to="/" className="inlineComponent">
                    Home
                </Link>
                <Link to={`/users`} className="inlineComponent">
                    User Index
                </Link>
                {/* <Link to={`/users/${user.userId}`} className="inlineComponent">
                    User: {user.userUsername}
                </Link> */}
                <Link to="/users/new" className="inlineComponent">
                    New User
                </Link>
            </div>
        </div>
    );
};

export default Navbar;