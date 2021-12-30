import { Carousel, Col, Row } from 'react-bootstrap';

import { image } from "../helpers/image";
import { useUser } from '../hooks/useUser';
import { useForm } from '../hooks/useForm'

export const LoginPage = () => {
    const { authLogin } = useUser();
    const [ formValues, handleChange ] = useForm({numCuenta: '15429245', nip: '202020'});

    const { numCuenta, nip } = formValues;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        authLogin( numCuenta, nip );
    }

    const showNIP = (e) => {
        const nipInput = document.getElementById('nip');
        if ( e.target.checked ) {
            nipInput.type = 'text';
        }
        else {
            nipInput.type = 'password';
        }
    }

    return (
        <section className="login | animate__animated animate__fadeIn">
            <Row className="g-0">
                <Col md={7} lg={8} className="d-none | d-lg-block| d-md-block">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 vh-100"
                                src={ image('./img-1.png').default }
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="teds">Rectoria</h3>
                                <p>
                                    La Universidad Autónoma de Sinaloa, aunque con diversas denominaciones en sus 148 años
                                    de existencia, ha sido un significativo soporte cultural y moral de 
                                    Sinaloa y el noroeste de México.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 vh-100"
                                src={ image('./img-2.jpg').default }
                                alt="Torre Academica"
                            />
                            <Carousel.Caption>
                                <h3>Torre Academica</h3>
                                <p>La Torre academica que se encuentra en la capital del estado y sirve para los eventos oficiales de la universidad.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 vh-100"
                                src={ image('./img-3.jpg').default }
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Rotonda Univesitaria</h3>
                                <p>Dentro de la torre academica contamos con estatuas de nuestros ilustres y mas reconocidos estudiantes,</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={5} lg={4} className="d-flex flex-column | min-vh-100 | login__form">
                    <div className="d-flex | justify-content-center | align-items-center | w-100 | logo">
                        <img src={ image('./UAS.png').default } className="img-fluid" alt="logo" />
                        <span className="logo__title d-lg-none d-md-none">SIIA Alumnos</span>
                        <img src={ image('./VISION.png').default } className="img-fluid d-none d-lg-block" alt="logo" />
                    </div>
                    <div className="align-self-center w-100 px-lg-5 py-lg-4 p-4 form_container">
                        <h1 className="title">Inicio de sesión</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="numCuenta">
                                <label htmlFor="numCuenta" className="form-label fw-bold numCuenta__label">Número de cuenta</label>
                                <div className="numCuenta__input">
                                    <input 
                                        inputMode="numeric"
                                        className="form-control border-0"
                                        id="numCuenta"
                                        placeholder="Ingresa tu número de cuenta"
                                        aria-describedby="Número de cuenta"
                                        name='numCuenta'
                                        value={numCuenta}
                                        onChange={handleChange}
                                    />
                                    <i className="numCuenta__icon fas fa-user-graduate fa-lg"></i>
                                </div>
                            </div>
                            <div className="nip">
                                <label htmlFor="nip" className="form-label fw-bold nip__label">NIP</label>
                                <div className="nip__input">
                                    <input 
                                        className="form-control border-0" 
                                        placeholder="Ingresa tu NIP"
                                        id="nip"
                                        type="password"
                                        inputMode="numeric"
                                        name='nip'
                                        value={nip}
                                        onChange={handleChange}
                                        autoComplete='new-password'
                                    />
                                    <i className="nip__icon fas fa-lock fa-lg"></i>
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={false} onChange={showNIP} />
                                <label className="form-check-label text-white" htmlFor="flexCheckChecked">
                                    Mostrar NIP
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Log in</button>
                        </form>
                   </div>
                </Col>
            </Row>
        </section>
    );
};
