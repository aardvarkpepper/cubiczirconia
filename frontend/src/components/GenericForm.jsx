import axios from 'axios';
import React, { Component } from 'react';
import './GenericForm.css';
import { snakeCaseToTitleCase, insertSpace } from "../utils/utils.js";


const GenericForm = ({ formDataObject = {}, formDataObjectKeysArray = [], setFormDataObject = () => { }, formType = "none" }) => {

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
                    <form className="formContainer">
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
                    </form>
                </div>
            )
        }
        // if formType none
    }
    return (
        <div className="GenericForm">
            {genericFormOutput()}
        </div>
    )
};
export default GenericForm;


// ==

// In parent Component

// import React from 'react';
// import GenericForm from './GenericForm';

// const ObjectForm = ({ objectType, objectData, onSave }) => {
//   const isEdit = !!objectData; // Check if objectData exists for edit operation

//   const handleSubmit = (formData) => {
//     if (isEdit) {
//       // Perform edit operation
//       // ...
//     } else {
//       // Perform create operation
//       // ...
//     }
//     onSave();
//   };

//   return (
//     <div>
//       <h2>{isEdit ? `Edit ${objectType}` : `Create ${objectType}`}</h2>
//       <GenericForm formData={objectData} onSubmit={handleSubmit} isEdit={isEdit} />
//     </div>
//   );
// };

// export default ObjectForm;

// ==

