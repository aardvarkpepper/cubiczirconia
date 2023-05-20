import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserEdit from "./UserEdit";

const API = process.env.REACT_APP_API_URL;

const UserShow = () => {

    const [userDetails, setUserDetails] = useState({});
    const [userDetailsKeysArray, setUserDetailsKeysArray] = useState([]);
    const { id } = useParams();

    const [showUserEdit, setShowUserEdit] = useState(false);

    useEffect(() => {
        axios.get(`${API}/users/${id}`)
            .then((response) => {
                setUserDetails(response.data);
                setUserDetailsKeysArray(Object.keys(response.data));
            }).catch((e) => {
                console.warn("UserDetails catch", e);
            })
    }, [id]);

    const showUserDetailsOrUserEdit = () => {
        if (showUserEdit) {
            return (
                <UserEdit
                    userDetailsKeysArray={userDetailsKeysArray}
                    userDetails={userDetails}
                />
            )
        } else {
            return (
                <UserDetails
                    userDetailsKeysArray={userDetailsKeysArray}
                    userDetails={userDetails}
                />
            )
        }
    }

    const toggleDetailsVsEdit = () => {
        setShowUserEdit(previous => !previous);
    }

    const toggleButtonText = () => {
        if (showUserEdit) {
            return "View Details"
        } else {
            return "Edit Details"
        }
    }

    return (
        <div>
            <div>Front End UserDetails</div>
            {showUserDetailsOrUserEdit()}
            <button onClick={toggleDetailsVsEdit}>{toggleButtonText()}</button>
        </div>
    )
};
export default UserShow;