import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { image } from '../helpers/image';

export const MaintenancePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <Layout>
            <div className="mantenimiento">
                <div className="image"><img alt="Mantenimiento" src={image('./mantenimiento.png')} /></div>
                <h3>¡Esta opción se encuentra en mantenimiento!</h3>
                <h4>Estamos trabajando para solucionar este problema lo antes posible</h4>
                <Button onClick={handleClick} className="back" variant="primary">Volver al inicio</Button>
                <div className="image"><img alt="Mantenimiento" src={image('./mantenimiento.png')} /></div>
            </div>
        </Layout>
    )
}
