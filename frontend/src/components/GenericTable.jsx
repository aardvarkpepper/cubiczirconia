import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

const GenericTable = ({ tableData =[] }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API}/users`)
        .then((response) => {
            console.log("GTableUsers Axios", JSON.stringify(response.data));
            setUsers(response.data)
        })
        .catch((e) => console.warn ("GTable Catch", e));
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        formFunction(formData);
    }

    const genericTableOutput = () => {
        if (tableData.length === 0) {
            return (
                <div>
                    <div>This table component requires particular arguments to be passed in from a parent element.</div>
                    <div>The table not rendering may be a result of the above not happening.</div>
                </div>
            )
        } else {
            return (
                <table>

                </table>
            )
        }
        // if formType none
    }
    return (
        <div className="GenericTable">
            {genericTableOutput()}
        </div>
    )
};
export default GenericForm;