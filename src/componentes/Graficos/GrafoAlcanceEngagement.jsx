import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from './../../imagenes/grafo_co-ocurencia_hashtags-2023-06-16-2023-06-16.PNG'
import './Graficos.css'
import {  Tooltip,  Select } from 'antd';
import foto from './../../imagenes/grafoig.png'
import foto2 from './../../imagenes/grafoigzoom.png'

import jsonFechas from './../../datos/rango_fechas.json'
//FIN FILTRO FECHAS

export default function GraphEventoAlcance(){


 //FILTRO FECHAS
 const [fechas, setFechas] = useState(jsonFechas.fechas)
 const [filtroFecha, setFiltroFecha] = useState(fechas[0])

 const opciones = fechas.slice(0, -1).map((fecha, index) => {
   return (
     <Select.Option key={index} value={fecha}>
       {fecha}
     </Select.Option>
   );
 });

 const handleFiltroFechaChange = (valor) => {
   setFiltroFecha(valor);
   console.log(valor)
 };
 

  

  return (
   
       <div>
      <div className='titulo-carta'>Grafo Alcance y Engagement</div>
      <div className='subtitulo-carta'>
        <div>Análisis de las últimas dos semanas</div>
      </div>
      <div className='cartaGrafoEventos nubepalabras grafo-eventos-alcance'>
     
  <Tooltip title="Click para ver el grafo">
    <a href={`https://qsngrafos.vercel.app/eventos-alcance/lanus-ig/grafo_eventos_alcance.html`} target="_blank">
    <div className='video-explicativo carta '>
      <img src={foto} className='imagen-grafo-eventos' />
      <img src={foto2} className='imagen-grafo-eventos'/>
    </div>
    </a>
    </Tooltip>
</div>
</div>




   
  
   
    );
    }