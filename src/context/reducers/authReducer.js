import { types } from "../types/types";

// const user = {
//     cuenta: '155456-3',
//     name: 'David Adrian Chavira Cebreros',
//     email: 'da.chavira18@info.uas.edu.mx',
// }

export const authReducer = ( state = {}, action ) => {
    console.log(action)
    
    switch ( action.type ) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        case  types.authLogout:
            return {
                user: {
                    id: null
                },
                checking: false
            }
        default:
            return state;
    }
}
