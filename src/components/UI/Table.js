import React from 'react';

export const Table = ({list,colums,title}) =>{
    return(
        <div className='contenido'>
        <h5 className='text-center fw-bold titulo'>{title}</h5>
        <br/>
        <table className='tab'>
            <thead className='cabecera'>
                   {
                       colums.map((v,i)=>(
                           <th className='columna' key={i}>{v}</th>
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