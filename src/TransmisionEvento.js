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
      
      
      {/* <iframe
              style={{ width: '50%', height: '50%'}}
              src="https://www.youtube.com/embed/Y98_gQKETUw?si=bxQoC23uL8uO5nX9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
  */}
    <div className="logo-container">
        <img src={Logocolmena} alt="logo colmena" />
      </div>
    </div>
  );
}

export default TransmisionEvento;
