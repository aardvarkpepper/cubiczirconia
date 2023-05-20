import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

const UsersIndex = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API}/users`)
            .then((response) => {
                console.log("UsersIndex response.data", response.data);
                setUsers(response.data);
            })
            .catch((e) => console.warn("UsersIndex Axios catch", e));
    }, [])

    return (
        <div>
            <div>Front End UsersIndex</div>
            {/* <div>{JSON.stringify(users)}</div> */}
        </div>
    )
};
export default UsersIndex;