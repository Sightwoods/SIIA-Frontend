import React from 'react';

export const Card = (list,ruta) =>{
    let l=Object.values(list)
    return(
        <div className='container'>
            <a href={ruta} id='carta'>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{l[0].Materia}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{l[0].Escuela}</h6>
                    <p>{l[0].Carrera}</p>
                    <p>Plan de Estudios: {l[0].Plan}</p>
                    <p>Periodo: {l[0].Periodo}</p>
                    <p>Grupo: {l[0].Grupo}</p>
                </div>
            </div>
            </a>
        </div>
    )
}