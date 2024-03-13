import React from 'react';
import './TransmisionEvento.css'; // Asumiendo que tienes un archivo de estilo llamado TransmisionEvento.css
import Logocolmena from './img/logo-colmena-seguros.png'

const TransmisionEvento = ({ enabled = false }) => {

  const videoId = "lczTdbe_HAQ";

  return (
    <div className="contenedor">

      { enabled ? (
        <>
          <iframe
            title="video"
            style={{ width: '60%', height: '60%'}}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe 
            title="chat"
            src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=www.formar2024.com`}
            width="560" 
            height="315" 
            frameBorder="0" 
            allowFullscreen/>
        </>
      ): (
        <div className='cont-seccion'>
          <div className='cont-info'>
            <p className='titulo-transmision'>El evento se habilitará el día</p>
            <p className='titulo-transmision-fecha'>Jueves 14 de Marzo 8:00am</p>
          </div>
        </div>
        
      )}
    <div className="logo-container">
        <img src={Logocolmena} alt="logo colmena" />
      </div>
  
    </div>
  
  );
}

export default TransmisionEvento;
