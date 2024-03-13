import React from 'react';
import './TransmisionEvento.css'; // Asumiendo que tienes un archivo de estilo llamado TransmisionEvento.css
import Logocolmena from './img/logo-colmena-seguros.png'

const TransmisionEvento = () => {
  return (
    <div className="contenedor">
    
      <div className='cont-seccion'>
        <div className='cont-info'>
          <p className='titulo-transmision'>El evento se habilitará el día</p>
          <p className='titulo-transmision-fecha'>Jueves 14 de Marzo 8:00am</p>
        </div>
      </div>
    
     
       <iframe
              style={{ width: '60%', height: '60%'}}
              src="https://www.youtube.com/embed/f73jfWHhvyM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe 
              src="https://www.youtube.com/live_chat?is_popout=1&v=f73jfWHhvyM" 
              width="560" 
              height="315" 
              frameborder="0" 
              allowfullscreen>
            </iframe>
  
   
    <div className="logo-container">
        <img src={Logocolmena} alt="logo colmena" />
      </div>
  
    </div>
  
  );
}

export default TransmisionEvento;
