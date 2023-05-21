import axios from 'axios';
import React, { Component } from 'react';
import './GenericForm.css';
import { snakeCaseToTitleCase, insertSpace } from "../utils/utils.js";


const GenericForm = ({ formDataObject = {}, formDataObjectKeysArray = [], setFormDataObject = () => {}, handleSubmit = () => {} , formType = "none" }) => {

    // const { user, loginUser, logoutUser } = useContext(UserContext);
    // const formDataKeysArray = Object.keys(formData);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     formFunction(formData);
    // }

    const handleTextChange = (event) => {
        setFormDataObject({ ...formDataObject, [event.target.id]: event.target.value });
    };

    const genericFormOutput = () => {
        if (!formDataObjectKeysArray.length) {
            return (
                <div>
                    <div>This form component requires particular arguments to be passed in from a parent element.</div>
                    <div>The form not rendering may be a result of the above not happening.</div>
                </div>
            )
        } else {
            return (
                <div>
                    <form className="formContainer" onSubmit={handleSubmit}>
                        {formDataObjectKeysArray.slice(1).map((keyElement) => {
                            return (
                                <div className="formElement">
                                    <label key={`keyElement`} htmlFor={keyElement}>
                                        {snakeCaseToTitleCase(keyElement)}: {insertSpace(2)}
                                    </label>
                                    <input
                                        id={keyElement}
                                        value={formDataObject[keyElement]}
                                        type="text"
                                        onChange={handleTextChange}
                                        placeholder={formDataObject[keyElement]}
                                        required
                                    />
                                    <br />
                                </div>
                            )
                        })}
                        <button type="submit">{formType}</button>
                    </form>
                </div>
            )
        }
    }
    return (
        <div className="GenericForm">
            {genericFormOutput()}
        </div>
    )
};
export default GenericForm;