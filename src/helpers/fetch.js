const baseURL = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {
    const url = `${ baseURL }/${ endpoint }`;

    if ( method === 'GET' ){
        return fetch(url);
    }
    else {
        return fetch(url, {
            method,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( data )
        });
    }
}

const fetchConToken = (endpoint, data, method = 'GET') => {
    const url = `${ baseURL }/${ endpoint }`;
    const token = localStorage.getItem('token') || null;

    if ( method === 'GET' ){
        return fetch(url, {
            method,
            headers: {
                'authorization': token
            },
        });
    }
    else {
        return fetch(url, {
            method,
            headers: {
                'authorization': token,
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( data )
        });
    }
}

export { fetchSinToken, fetchConToken };