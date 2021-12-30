import { useState } from 'react';
import validator from 'validator';

export const useForm = ( initialState = {}) => {

    const [values, setValues] = useState( initialState );

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({ target }) => {
        if ( validator.isNumeric(target.value) || validator.isEmpty(target.value) ){
            setValues({
                ...values,
                [ target.name ]: target.value
            })
        }
    };
    
    return [ values, handleInputChange, reset ];
}