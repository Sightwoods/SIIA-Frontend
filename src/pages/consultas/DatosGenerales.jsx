import React from 'react';

import { Layout } from '../../components/layout/Layout';
import { Loading } from '../../components/UI/Loading';
import { TablaDatosGenerales } from '../../components/UI/TablaDatosGenerales';

import { useFetch } from '../../hooks/useFetch';
import { isValid } from '../../helpers/verifyToken';

export const DatosGenerales = React.memo(() => {
    isValid();
    
    const [ studentData, errorStudent, isLoading ] = useFetch('users/student');
    const [ parentData, errorParent, isParentLoading ] = useFetch('users/parents');
    
    return (
        <Layout>
            {
                (!isLoading && !isParentLoading)
                ?
                    (!errorStudent && !errorParent)
                    ?
                    <TablaDatosGenerales data={{ student: studentData, parent: parentData }} />
                    :
                    <span>Error</span>
                :
                <Loading />
            }
        </Layout>
    )
})
