import React from 'react';

export const Table = ({list,colums,title}) =>{
    return(
        <div className='contenido'>
        <h5 className='text-center fw-bold titulo'>{title}</h5>

        <table className='tab table table-hover table-borderless'>
            <thead className='tcabecera'>
                   {
                       colums.map((v,i)=>(
                           <th className='columna text-capitalize' key={i}>{v}</th>
                       ))
                   } 
            </thead>
            <tbody className='cuerpo'>
                    {
                       list.map((v)=>(
                           <tr className='fila'>{
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