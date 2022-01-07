import { useUser } from '../../hooks/useUser';

export const TablaDatosGenerales = ({ data }) => {
    const { user } = useUser();
    const { student, parent } = data;

    return (
        <div className="container">
            <div className='row d-flex justify-content-center'>
                <div className='col-md-10 mt-1' id='contenido'>
                    <div className='row'>
                        <div className='col-sm-4 rounded-start' id='perfil'>
                            <div className='card-block text-center text-white'>
                                <img
                                    className='fa-7x mt-5 rounded-circle'
                                    src={user.foto}
                                    alt='foto de perfil'
                                    width={150}
                                    height={150}
                                />
                                <h2 className='font-weight-bold mt-4 fs-5'>{user.nombre}</h2>
                                <p className='fs-6'>Facultad de Informática Culiacán</p>
                            </div>
                        </div>
                        <div className='col-sm-8 rounded-end' id='columna'>
                            <h3 className='mt-3 text-center'>Datos Generales</h3>
                            <hr className='mt-0' />
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>No. Cuenta</p>
                                    <h6 className='text-muted'>{user.cuenta}</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Sexo</p>
                                    <h6 className='text-muted'>{ (student.sex === 'M') ? 'Masculino' : 'Femenino' }</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Fecha Nacimiento</p>
                                    <h6 className='text-muted'>{student.birthday}</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Fecha Ingreso</p>
                                    <h6 className='text-muted'>{student.admission_date}</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Calle</p>
                                    <h6 className='text-muted'>{student.street}</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Colonia</p>
                                    <h6 className='text-muted'>{student.suburb}</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Codigo Postal</p>
                                    <h6 className='text-muted'>{student.postal_code}</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Localidad</p>
                                    <h6 className='text-muted'>{student.city}</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>CURP</p>
                                    <h6 className='text-muted'>{student.curp}</h6>
                                </div>
                                <div className='col-sm-6'>
                                    <p className='font-weight-bold'>Afiliacion IMSS</p>
                                    <h6 className='text-muted'>{student.nss}</h6>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h3 className='mt-3 text-center'>Datos del Padre / Madre</h3>
                                <hr />
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <p className='font-weight-bold'>Nombre</p>
                                        <h6 className='text-muted'>{parent.name}</h6>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='font-weight-bold'>Calle</p>
                                        <h6 className='text-muted'>{parent.street}</h6>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='font-weight-bold'>Colonia</p>
                                        <h6 className='text-muted'>{parent.suburb}</h6>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='font-weight-bold'>Telefono</p>
                                        <h6 className='text-muted'>{parent.phone_number}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
