import React, { useState } from 'react'
import { Acordeonitem } from './Acordeonitem';
import {data} from '../services/data';

export const Acordeon = () => {
  const [abierto, setAbierto] = useState(null);

  return (
    <div className='accordion'>
    {
    data.map((item, index) => (
     <Acordeonitem
       key={index}
       index={index}
       pregunta={item.pregunta}
       respuesta={item.respuesta}
       abierto={index === abierto}
       setAbierto={setAbierto}
     />
   ))}
 </div>
  )
}


