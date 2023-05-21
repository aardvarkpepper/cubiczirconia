import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { snakeCaseToTitleCase } from "../utils/utils.js";
import GenericForm from "./GenericForm";


const API = process.env.REACT_APP_API_URL;

const UserEdit = ({ userDetailsKeysArray, userDetails, setUserDetails, setShowUserEdit }) => {

    const { id } = useParams();
    let navigate = useNavigate();
    // const [userEditDetails, setUserEditDetails] = useState({});
    // const [userKeys, setUserKeys] = useState([]);

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


    // const updateProduct = (updatedProduct) => {
    //     axios
    //         .put(`${API}/products/${id}`, updatedProduct)
    //         .then(
    //             () => {
    //                 navigate(`/retailer/products/${id}`);
    //             },
    //             (error) => console.error(error)
    //         )
    //         .catch((c) => console.warn("catch", c));
    // }

    // //delete
    // const deleteProduct = () => {
    //     axios.delete(`${API}/products/${id}`)
    //         .then(() => {
    //             navigate(`/retailer/products`);
    //         },
    //             (error) => console.error(error)
    //         )
    //         .catch((c) => console.warn("catch", c))
    // };

    // const handleDelete = () => {
    //     const response = window.confirm("Really delete this product?")
    //     if (response) {
    //         alert("OK, deleting product.")
    //         deleteProduct();
    //     } else {
    //         alert("Deletion cancelled.")
    //     }
    // };

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

        </div>
    )
};
export default UserEdit;