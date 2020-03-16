const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    
    if(validator.isEmpty(data.email)){
        errors.email = "Email requis.";
    } else if (!validator.isEmail(data.email)) {
        errors.email = "Email incorrect.";
    }

    if(validator.isEmpty(data.password)){
        errors.password = "Mot de passe requis.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};