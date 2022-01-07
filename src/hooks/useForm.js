import { useState } from 'react';
import validator from 'validator';

export const useForm = ( initialState = {}) => {

    const [values, setValues] = useState( initialState );
    const [error, setError] = useState({});

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
        if ( validator.isEmpty(target.value) ){
            setError({
                ...error,
                [ target.name ]: {
                    msg: 'Debes rellenar este campo',
                    error: true
                }
            });
        }
        else {
            setError({
                ...error,
                [ target.name ]: {
                    msg: 'Debes rellenar este campo',
                    error: false
                }
            });
        }
    };
    
    return [ values, handleInputChange, reset, error ];
}