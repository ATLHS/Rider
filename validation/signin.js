const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateSigninInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password1 = !isEmpty(data.password1) ? data.password1 : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    
    if(validator.isEmpty(data.name)) {
        errors.name = "Nom obligatoire.";
    }
    if(validator.isEmpty(data.email)) {
        errors.email = "Email obligatoire.";
    }
    if(validator.isEmpty(data.password1)) {
        errors.password1 = "Mot de passe obligatoire.";
    }
    if(validator.isEmpty(data.password2)) {
        errors.password2 = "Mot de passe obligatoire.";
    }
    if(!validator.isLength(data.password1, {min: 5, max: 30})) {
        errors.password1 = "Le mot de passe doit contenir au minimum 5 caractères.";
    }
    if(!validator.equals(data.password1, data.password2)) {
        errors.password2 = "Les mot de passe doivent être identique.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};