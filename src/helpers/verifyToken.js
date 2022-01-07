import { fetchConToken } from "./fetch"

export const isValid = async () => {
    try {
        const resp = await fetchConToken( 'users/auth_check' );
        const body = await resp.json();
        if ( body.success ) {
            return;
        }
        else {
            window.location.reload()
        }
    }
    catch(e) {
        window.location.reload()
    }
}