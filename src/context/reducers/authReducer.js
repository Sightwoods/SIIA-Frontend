import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {
    console.log(action)

    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                status: 'authenticated'
            }
            
        case types.logout:
            return {
                user: null,
                token: null,
                status: 'unauthenticated',
            }

        default:
            return state;
    }
}
