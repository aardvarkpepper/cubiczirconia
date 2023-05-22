import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Div from "../styledComponents/Div.jsx";

const Home = () => {

    const { user } = useContext(UserContext);

    return (
        <div>
            <div>Front End Home</div>
            <Div>
                Text styled with component (change styling in settings, under user themes).
            </Div>
            {(user.user_access_level > 2) ? "Conditionally rendered text for access levels > 2" : "Conditionally rendered text for access levels not > 2"}
        </div>


    )
};
export default Home;