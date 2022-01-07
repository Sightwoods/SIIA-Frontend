import { useEffect, useState } from 'react';
import { Button, Container, Form, Image, Row, Spinner, ToggleButton } from 'react-bootstrap';

import { image } from "../helpers/image";
import { useUser } from '../hooks/useUser';
import { useForm } from '../hooks/useForm'

export const LoginPage = () => {
    const [ checked, setChecked ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState(null);
    const { authLogin } = useUser();
    const [ formValues, handleChange, , error ] = useForm({numCuenta: '', nip: ''});

    const { numCuenta, nip } = formValues;

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        const resp = await authLogin(numCuenta, nip);
        setErrorMsg(resp);
        setIsLoading(false);
    }

    const onFocus = (e) => {
        const element = e.currentTarget;
        const div = document.querySelector(`div[data-label="${element.name}"]`);
        const label = document.querySelector(`label[data-label="${element.name}"]`);
        if ( !div.classList.contains('focus') ) {
            div.classList.add('focus');
            label.classList.add('label-focus');
        }
    }

    const onBlur = (e) => {
        const element = e.currentTarget;
        const div = document.querySelector(`div[data-label="${element.name}"]`);
        const label = document.querySelector(`label[data-label="${element.name}"]`);
        if ( e.target.value.length === 0 ) {
            div.classList.remove('focus');
            label.classList.remove('label-focus');
        }
    }

    useEffect(() => {
        const account = document.getElementsByName('numCuenta');
        const nip = document.getElementsByName('nip');
        if ( account[0].value.length > 0 ){
            const div = document.querySelector(`div[data-label="${account[0].name}"]`);
            const label = document.querySelector(`label[data-label="${account[0].name}"]`);
            div.classList.add('focus');
            label.classList.add('label-focus');
        }
        if ( nip[0].value.length > 0 ){
            const div = document.querySelector(`div[data-label="${nip[0].name}"]`);
            const label = document.querySelector(`label[data-label="${nip[0].name}"]`);
            div.classList.add('focus');
            label.classList.add('label-focus');
        }

        return(() => {
            setChecked(false);
            setErrorMsg(null);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        const nipInput = document.getElementById('nip');
        if ( checked ) {
            nipInput.type = 'text';
        }
        else {
            nipInput.type = 'password';
        }
    }, [checked])

    useEffect(() => {
        const account = document.getElementsByName('numCuenta');
        const nip = document.getElementsByName('nip');
        const divAccount = document.querySelector(`div[data-label="${account[0].name}"]`);
        const labelAccount = document.querySelector(`label[data-label="${account[0].name}"]`);
        const divNip = document.querySelector(`div[data-label="${nip[0].name}"]`);
        const labelNip = document.querySelector(`label[data-label="${nip[0].name}"]`);
        if ( error.numCuenta?.error ){
            divAccount.classList.add('error');
            labelAccount.classList.add('label-error');
        }
        else {
            divAccount.classList.remove('error');
            labelAccount.classList.remove('label-error');
        }

        if ( error.nip?.error ){
            divNip.classList.add('error');
            labelNip.classList.add('label-error');
        }
        else {
            divNip.classList.remove('error');
            labelNip.classList.remove('label-error');
        }
    }, [error])

    return (
        <section className="login | animate__animated animate__fadeIn">
            <Container className="login__container">
                <Row className="login__logo"><Image src={image('./UAS.png')} alt="UAS" /></Row>
                <Container fluid>
                    <Row className="login__title"><span>Inicio de sesión</span></Row>
                    <Row className="login__subtitle">
                        {   
                            (errorMsg)
                            ?
                            <Form.Text className="text-muted error-msg">
                                <i className="fas fa-exclamation-circle me-2"></i>
                                { errorMsg.msg }
                            </Form.Text>
                            :
                            <small>Rellena el formulario</small>
                        }
                    </Row>
                </Container>
                <Container fluid className="px-1">
                    <Form className="login__form" onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="account">
                            <Container fluid className="account">
                                <Form.Label data-label="numCuenta">Número de cuenta</Form.Label>
                                <div data-label="numCuenta">
                                    <Form.Control
                                        type="text"
                                        inputMode="numeric"
                                        name='numCuenta'
                                        maxLength={8}
                                        value={numCuenta}
                                        onChange={handleChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                    />
                                </div>
                                <Form.Text className="text-muted error-msg">
                                    {
                                        (error.numCuenta?.error)
                                        &&
                                        <>
                                            <i className="fas fa-exclamation-circle ms-1 me-2"></i>
                                            {error.numCuenta?.msg}
                                        </>
                                    }
                                </Form.Text>
                            </Container>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="nip">
                            <Container fluid className="nip">
                                <Form.Label data-label="nip">NIP</Form.Label>
                                <div data-label="nip">
                                    <Form.Control
                                        type="password"
                                        inputMode="numeric"
                                        name='nip'
                                        maxLength={6}
                                        value={nip}
                                        onChange={handleChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        autoComplete='new-password'
                                    />
                                    <ToggleButton
                                        id="mostrar-nip"
                                        type="checkbox"
                                        checked={checked}
                                        value="true"
                                        className="mostrar-nip"
                                        onChange={(e) => setChecked(e.currentTarget.checked)}
                                    >
                                        { (checked) ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i> }
                                    </ToggleButton>
                                </div>
                                <Form.Text className="text-muted error-msg">
                                    {
                                        (error.nip?.error)
                                        &&
                                        <>
                                            <i className="fas fa-exclamation-circle ms-1 me-2"></i>
                                            {error.nip?.msg}
                                        </>
                                    }
                                </Form.Text>
                            </Container>
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Si tienes problemas para iniciar sesión comunicate con control escolar.
                        </Form.Text>
                        <div className="d-flex justify-content-end">
                            <Button variant="primary" type="submit" className="login__submit">
                                {
                                    (!isLoading)
                                    ?
                                    'Acceder'
                                    :
                                    <Spinner className="request_spinner" animation="border" />
                                }
                            </Button>
                        </div>
                    </Form>
                </Container>
            </Container>
        </section>
    );
};
