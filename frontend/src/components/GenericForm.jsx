import React, { Component } from 'react';

const GenericForm = ({ formData ={}, formFunction = ()=>{}, formType = "none" }) => {

    const { user, loginUser, logoutUser } = useContext(UserContext);
    const formDataKeysArray = Object.keys(formData);

    const handleSubmit = (event) => {
        event.preventDefault();
        formFunction(formData);
    }

    const genericFormOutput = () => {
        if (formType === "none") {
            return (
                <div>
                    <div>This form component requires particular arguments to be passed in from a parent element.</div>
                    <div>The form not rendering may be a result of the above not happening.</div>
                </div>
            )
        } else {
            return (
                <div className="formContainer">
                    <form>

                    </form>
                </div>
            )
        }
        // if formType none
    }
    return (
        <div className="GenericForm">
            <form onSubmit={handleSubmit}>
                <button type="submit">{formType}</button>
            </form>
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

