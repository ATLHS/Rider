import React, {useState} from 'react';

const useForm = (initialValues) => {

    const [values, setInitialValues] = useState(initialValues);
    const [validated, setValidated] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const handleInputChange = e => {
        setInitialValues({...values, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          setValidated(true);
        } else {
            setFormIsValid(true);
        }
    }
    return [
        values,
        handleInputChange,
        handleSubmit,
        validated,
        formIsValid
    ];
}

export default useForm;