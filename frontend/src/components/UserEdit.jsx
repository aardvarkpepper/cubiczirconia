import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import GenericForm from "./GenericForm";

const API = process.env.REACT_APP_API_URL;

const UserEdit = ({ userDetailsKeysArray, userDetails, setUserDetails, setShowUserEdit }) => {

    const { id } = useParams();
    let navigate = useNavigate();

    // Update
    const updateUser = (updatedUser) => {
        axios
            .put(`${API}/users/${id}`, updatedUser)
            .then(
                () => {
                    navigate(`/users/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(userDetails);
        setShowUserEdit(previous => !previous);
    };


    //delete
    const deleteUser = () => {
        axios.delete(`${API}/users/${id}`)
            .then(() => {
                navigate(`/users`);
            },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c))
    };

    const handleDelete = () => {
        const response = window.confirm("Really delete this record?")
        if (response) {
            alert("OK, deleting product.")
            deleteUser();
        } else {
            alert("Deletion cancelled.")
        }
    };

    return (
        <div>
            <div>Front End UserEdit</div>
            <div>ID numbers may not be changed.</div>
            <div>The ID number for this record is {userDetails.user_id}</div>
            <GenericForm 
            formDataObject = {userDetails}
            setFormDataObject={setUserDetails}
            formDataObjectKeysArray = {userDetailsKeysArray}
            handleSubmit={handleSubmit}
            formType="Edit Details"
            />
            <button onClick={handleDelete}>Delete Record</button>
        </div>
    )
};
export default UserEdit;