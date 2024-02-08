import React, { useState, useEffect } from 'react';
import {Button, Select, Tooltip } from 'antd';
import jsonFechas from './../../datos/rango_fechas.json'
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import 'bootstrap/dist/css/bootstrap.min.css';
import json from './../../datos/datos_globales_grafo_palabras_freq.json'
import { MdOpenInNew } from 'react-icons/md'
import './Graficos.css'

export default function GrafoPalabras() {
  const [fechas, setFechas] = useState(jsonFechas.fechas);
  const [filtroFecha, setFiltroFecha] = useState(fechas[0]);
 


 

  const opcionesFechas = fechas.map((fecha, index) => (
    <Select.Option key={index} value={fecha}>
      {fecha.slice(0, 10)}
    </Select.Option>
  ));


  useEffect(() => {
    const drawGraph = () => {
      const container = document.getElementById('palabrasMasFrecuentes');

      // parsing and collecting nodes and edges from the python
      const nodes = new DataSet(json[filtroFecha][0])
      const edges = new DataSet(json[filtroFecha][1])
      // const nodes = new DataSet([{"color": "#97c2fc", "font": {"color": "white"}, "id": "Marcelo Ebrard", "label": "Marcelo Ebrard", "shape": "dot", "size": 20}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "m_ebrard", "label": "m_ebrard", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "marcelo", "label": "marcelo", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "ebrard", "label": "ebrard", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "claudiashein", "label": "claudiashein", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "lopezobrador_", "label": "lopezobrador_", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "mexico", "label": "mexico", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "morena", "label": "morena", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "gobierno", "label": "gobierno", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "claudia", "label": "claudia", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "personas", "label": "personas", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "amlo", "label": "amlo", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "seguridad", "label": "seguridad", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "presidente", "label": "presidente", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "migrantes", "label": "migrantes", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "lopez", "label": "lopez", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "rosaicela_", "label": "rosaicela_", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "sheinbaum", "label": "sheinbaum", "shape": "dot", "size": 2}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "adan_augusto", "label": "adan_augusto", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "candidato", "label": "candidato", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "politica", "label": "politica", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "Claudia Sheinbaum", "label": "Claudia Sheinbaum", "shape": "dot", "size": 20}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "rosalia", "label": "rosalia", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "ciudad", "label": "ciudad", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "metro", "label": "metro", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "millones", "label": "millones", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "gracias", "label": "gracias", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "mujeres", "label": "mujeres", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "vida", "label": "vida", "shape": "dot", "size": 1}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "campana", "label": "campana", "shape": "dot", "size": 1}]);
      // const edges = new DataSet([{"Ocurrencias": 13497, "from": "Marcelo Ebrard", "to": "m_ebrard", "width": 1}, {"Ocurrencias": 5275, "from": "Marcelo Ebrard", "to": "marcelo", "width": 1}, {"Ocurrencias": 3852, "from": "Marcelo Ebrard", "to": "ebrard", "width": 1}, {"Ocurrencias": 2283, "from": "Marcelo Ebrard", "to": "claudiashein", "width": 1}, {"Ocurrencias": 2228, "from": "Marcelo Ebrard", "to": "lopezobrador_", "width": 1}, {"Ocurrencias": 2085, "from": "Marcelo Ebrard", "to": "mexico", "width": 1}, {"Ocurrencias": 1914, "from": "Marcelo Ebrard", "to": "morena", "width": 1}, {"Ocurrencias": 1515, "from": "Marcelo Ebrard", "to": "gobierno", "width": 1}, {"Ocurrencias": 1078, "from": "Marcelo Ebrard", "to": "claudia", "width": 1}, {"Ocurrencias": 997, "from": "Marcelo Ebrard", "to": "personas", "width": 1}, {"Ocurrencias": 836, "from": "Marcelo Ebrard", "to": "amlo", "width": 1}, {"Ocurrencias": 798, "from": "Marcelo Ebrard", "to": "seguridad", "width": 1}, {"Ocurrencias": 712, "from": "Marcelo Ebrard", "to": "presidente", "width": 1}, {"Ocurrencias": 650, "from": "Marcelo Ebrard", "to": "migrantes", "width": 1}, {"Ocurrencias": 625, "from": "Marcelo Ebrard", "to": "lopez", "width": 1}, {"Ocurrencias": 530, "from": "Marcelo Ebrard", "to": "rosaicela_", "width": 1}, {"Ocurrencias": 520, "from": "Marcelo Ebrard", "to": "sheinbaum", "width": 1}, {"Ocurrencias": 496, "from": "Marcelo Ebrard", "to": "adan_augusto", "width": 1}, {"Ocurrencias": 494, "from": "Marcelo Ebrard", "to": "candidato", "width": 1}, {"Ocurrencias": 367, "from": "Marcelo Ebrard", "to": "politica", "width": 1}, {"Ocurrencias": 2224, "from": "m_ebrard", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 637, "from": "marcelo", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 519, "from": "ebrard", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 18516, "from": "claudiashein", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1713, "from": "lopezobrador_", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1642, "from": "mexico", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 614, "from": "morena", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1947, "from": "gobierno", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 2575, "from": "claudia", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 616, "from": "personas", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 775, "from": "seguridad", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1709, "from": "sheinbaum", "to": "Claudia Sheinbaum", "width": 1}, {"Ocurrencias": 1717, "from": "Claudia Sheinbaum", "to": "rosalia", "width": 1}, {"Ocurrencias": 1658, "from": "Claudia Sheinbaum", "to": "ciudad", "width": 1}, {"Ocurrencias": 1119, "from": "Claudia Sheinbaum", "to": "metro", "width": 1}, {"Ocurrencias": 618, "from": "Claudia Sheinbaum", "to": "millones", "width": 1}, {"Ocurrencias": 606, "from": "Claudia Sheinbaum", "to": "gracias", "width": 1}, {"Ocurrencias": 571, "from": "Claudia Sheinbaum", "to": "mujeres", "width": 1}, {"Ocurrencias": 507, "from": "Claudia Sheinbaum", "to": "vida", "width": 1}, {"Ocurrencias": 492, "from": "Claudia Sheinbaum", "to": "campana", "width": 1}]);
// create an array with edges

      const data = {
        nodes: nodes,
        edges: edges
      };

      const options = {
        height: '300px',
        backgroundColor: '#000000',
        
        position: 'relative',
        float: 'left'
      };

      // create a network
      const network= new Network(container, data, options);
    };

    drawGraph();
  },[filtroFecha])


 
  const handleFiltroFechaChange = (valor) => {
    setFiltroFecha(valor);
  };

  
  return <div>
    <div className='titulo-carta'>Grafo palabras frecuentes</div>

  <div className='subtitulo-carta'>
        <div>Generado con los términos más mencionados</div>
        <div className='boton-abrir-externo'>
    <Tooltip title='Abrir en otro navegador'>
    <a href={`https://qsngrafos.vercel.app/palabras/maduro1500/grafo_palabras-frecuentes-${filtroFecha}.html`} target="_blank"><Button  shape="circle">
        <MdOpenInNew/>
    </Button>
     </a>
  </Tooltip>
  </div>
        {/* <Tooltip title='Descargar Excel'>
          <Button onClick={handleDownloadExcel} type='primary' shape='circle' className='subtitulo-boton'>
            <HiDocumentDownload />
          </Button>
        </Tooltip> */}
      </div>
      <div className='carta nubepalabras'>
        <div className='fechas'>
          <Select placeholder
    ="Fechas" onChange={handleFiltroFechaChange} defaultValue={filtroFecha.slice(0, 10)}>
    {opcionesFechas}
  </Select>

  </div>
 <div id="palabrasMasFrecuentes" style={{backgroundColor:"#000041", height:"300px", borderRadius:"10px"}}></div>
</div>
</div>
};

