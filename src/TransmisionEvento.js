import React from 'react';
import './TransmisionEvento.css'; // Asumiendo que tienes un archivo de estilo llamado TransmisionEvento.css

const TransmisionEvento = () => {
  return (
    <div className="contenedor">
      <div className="container_live">
        <div className="container_live_wrapper">
          <div className='container_live_frame'>
            <iframe
              src="https://www.youtube.com/embed/Y98_gQKETUw?si=bxQoC23uL8uO5nX9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransmisionEvento;
