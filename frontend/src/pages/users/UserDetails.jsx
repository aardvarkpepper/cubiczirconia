import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { snakeCaseToTitleCase } from "../../utils/utils.js";

const API = process.env.REACT_APP_API_URL;

const UserDetails = () => {

    const [userDetails, setUserDetails] = useState({});
    const [userDetailsKeysArray, setUserDetailsKeysArray] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API}/users/${id}`)
            .then((response) => {
                setUserDetails(response.data);
                setUserDetailsKeysArray(Object.keys(response.data));
            }).catch((e) => {
                console.warn("UserDetails catch", e);
            })
    }, [id]);

    return (
        <div>
            <div>Front End UserDetails</div>
            <table>
                <tbody>
                    {userDetailsKeysArray.map((keyElement) => {
                        return (
                            <tr key={`users ${keyElement}`}>
                                <td>
                                    {snakeCaseToTitleCase(keyElement)}
                                </td>
                                <td>
                                    {userDetails[keyElement]}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to={`/users/${id}/edit`}>
                <button>Edit</button>
            </Link>
        </div>
    )
};
export default UserDetails;