import React, {useState} from 'react';

export const useForm = (initialData) => {
    const [signUpData, setSignUpData] = useState(initialData);

    const handleChange = e => {
        setSignUpData({...signUpData, [e.target.name]: e.target.value});
    }

    return [
        signUpData,
        handleChange
    ];
}