import { useCallback, useEffect, useState } from 'react';
import { fetchConToken } from '../helpers/fetch';

export const useFetch = (endpoint) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadData = useCallback(
        async() => {
            try {
                const resp = await fetchConToken(endpoint);
                const body = await resp.json();
                if ( body.success ) {
                    const data = body.data;
                    setData(data);
                }
                else {
                    throw new Error('No hay datos');
                }
            }
            catch(e) {
                setError(e);
            }
            finally {
                setIsLoading(false);
            }
        }
    , [endpoint])

    useEffect(() => {
        loadData();
        return (()  => {
            setData(null);
            setError(null);
            setIsLoading(true);
        });
    }, [loadData]);

    return [
        data, error, isLoading
    ]
}
