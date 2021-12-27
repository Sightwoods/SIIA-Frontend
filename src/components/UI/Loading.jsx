import { Spinner } from 'react-bootstrap';

export const Loading = () => {
    return (
        <div className="loading">
            <Spinner animation="border" role="status" className="loading__spinner">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <span className="loading__text">Espere un momento</span>
        </div>
    )
}
