import React from 'react';

export const Table = ({list,colums,title}) =>{
    return(
        <div className='contenido'>
        <h5 className='text-center fw-bold'>{title}</h5>
        <table className='tabla'>
            <thead>
                   {
                       colums.map((v,i)=>(
                           <th key={i}>{v}</th>
                       ))
                   } 
            </thead>
            <tbody>
                    {
                       list.map((v)=>(
                           <tr>{
                                Object.values(v).map((v,i)=>(
                               <td key={i} data-label={colums[i]}>{v}</td>
                           ))}
                           </tr>
                       ))
                   } 
            </tbody>
        </table>
    </div>
    )
}