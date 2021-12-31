import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useMediaQuery } from 'react-responsive';

import { Layout } from '../components/layout/Layout';
import { image } from '../helpers/image';

export const HomePage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 991.92px)' })

    return (
        <Layout>
            <div className="dashboard">
                <div className="dashboard__image"><Image src={ image('./img-1.png') } fluid /></div>
                <div className="dashboard__cards">
                    <Card>
                        <Card.Img variant="top" src={image('./pagos.png')} />
                        <Card.Body>
                            <Card.Title>Guías de pago</Card.Title>
                            <Card.Text>
                                    Descarga las guías para la correcta realización de tus pagos por medio de los bancos autorizados.
                            </Card.Text>
                            <div className="dashboard__button">
                                <Button variant="primary">Santander</Button>
                                <Button variant="primary">Banorte</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={image('./guia.png')} />
                        <Card.Body>
                            <Card.Title>Guías estudiantiles</Card.Title>
                            <Card.Text>
                                    Descarga las guías para los procesos o tramites correspondientes.
                            </Card.Text>
                            <div className="dashboard__button">
                                <Button variant="primary">Reinscripciones</Button>
                                <Button variant="primary">Extraordinarios</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header as="h5">Últimas noticias</Card.Header>
                        <Card.Body>
                            <iframe
                                title="Facebook UAS"
                                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUASoficial&tabs=timeline&width=${(isMobile) ? '255' : '500'}&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId`} 
                                width="500"
                                height="300"
                                style={{border:"none",overflow:"hidden"}}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </Card.Body>
                    </Card>
                </div>
            </div> 
        </Layout>
    )
};
