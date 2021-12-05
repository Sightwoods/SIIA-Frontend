import { useRef, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Layout } from '../components/layout/Layout';
import { image } from "../helpers/image";

export const HomeScreen = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const ref = useRef(null);
    const handleLoad = (e)=> {
        setIsLoaded(true)
        ref.current.classList.toggle('hide');
    }

    return (
        <Layout>  
            <Container className="home">
                <Row className="main-container">
                    <Col md={8} className="left-container animate__animated animate__fadeIn">
                        <span className="welcome-message">
                            Bienvenido de nuevo!
                            <img alt="buho" src={ image('./buho.gif').default } className="buho"/>
                        </span>
                        <Row>
                            <Col md={5}>
                                <div className="calendar-container">
                                    <img src={image('./calendario.jpg').default} alt="calendario" />
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="facebook">
                                    {
                                        ( !isLoaded )
                                            ?
                                            <div className="loading">
                                                <Spinner animation="border" variant="primary" />
                                            </div>
                                            : null
                                    }
                                    <iframe
                                        onLoad={handleLoad}
                                        ref={ref}
                                        className="hide"
                                        title="facebook-uas"
                                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUASoficial%2F&tabs=timeline&width=450&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                        width="450"
                                        height="100%"
                                        style={{border:"none",overflow:"hidden"}}
                                        scrolling="no"
                                        frameBorder="0"
                                        allowFullScreen={true}
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} className="right-container animate__animated animate__fadeInUp">
                        <div className="user-section">
                            <div className="profile-info">
                                <button className="picture">
                                    <img src={image('./ruben.jpg').default} alt="Profile" />
                                    <div className="edit-picture">
                                        <span>Cambiar foto</span>
                                    </div>
                                </button>
                                <div className="picture-caption">
                                    <span className="student-name">Ruben Gomez Ulloa</span>
                                    <span className="student-account">No. Cuenta: 1542155-5</span>
                                </div>
                            </div>
                            <div className="school-info">
                                <div className="container-fluid">
                                    <Col className="text" md={10}>
                                        <span>Lic. Informatica</span>
                                        <span>Promedio general acutal</span>
                                    </Col>
                                    <Col className="grade" md={2}>
                                        <span>9.88</span>
                                    </Col>
                                </div>
                            </div>
                            <div className="options">
                                <span>Configuraciones</span>
                                <button>Cambiar NIP<i className="fas fa-chevron-right"></i></button>
                                <button>Accesibilidad<i className="fas fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
};
