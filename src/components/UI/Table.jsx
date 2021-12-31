import React from 'react';

export const Table = ({list,colums,title}) =>{
    return(
        <div className='contenido'>
        <h5 className='text-center fw-bold titulo'>{title}</h5>

        <table className='tab table table-hover table-borderless table-striped'>
            <thead className='tcabecera'>
                {
                    colums.map((v,i)=>(
                        <tr className="columna text-capitalize" key={i}>
                            <th className="">{v}</th>
                        </tr>
                    ))
                } 
            </thead>
            <tbody className='cuerpo'>
                    {
                       list.map((v, i)=>(
                           <tr className='fila' key={i}>{
                                Object.values(v).map((v,i)=>(
                                    <td className='campo' key={i} data-label={colums[i]}>{v}</td>
                                ))}
                           </tr>
                       ))
                   } 
            </tbody>
        </table>
    </div>
    )
}