import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { snakeCaseToTitleCase } from "../../utils/utils.js";


const API = process.env.REACT_APP_API_URL;

const UserEdit = ({ userDetailsKeysArray, userDetails }) => {

    const { id } = useParams();
    let navigate = useNavigate();
    const [userEditDetails, setUserEditDetails] = useState({});
    const [userKeys, setUserKeys] = useState([]);

    const handleSubmit = () => {

    }

    const updateProduct = (updatedProduct) => {
        axios
            .put(`${API}/products/${id}`, updatedProduct)
            .then(
                () => {
                    navigate(`/retailer/products/${id}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    }

    //delete
    const deleteProduct = () => {
        axios.delete(`${API}/products/${id}`)
            .then(() => {
                navigate(`/retailer/products`);
            },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c))
    };

    const handleDelete = () => {
        const response = window.confirm("Really delete this product?")
        if (response) {
            alert("OK, deleting product.")
            deleteProduct();
        } else {
            alert("Deletion cancelled.")
        }
    };

    return (
        <div>
            <div>Front End UserEdit</div>
            <div>
                UserEDIT JSON STRINGIFY
            </div>
            <div>
                {JSON.stringify(userDetails)}
            </div>
            <div>
                UserEDIT JSON STRINGIFY KEYS ARRAY
            </div>
            <div>
                {JSON.stringify(userDetailsKeysArray)}
            </div>
            {/* <form onSubmit={handleSubmit}>
                {setUserKeys.map((userKey) => {
                    <label>

                    </label>

                })}

            </form> */}


        </div>
    )
};
export default UserEdit;