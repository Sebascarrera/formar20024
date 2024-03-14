import React from 'react';
import './TransmisionEvento.css'; // Asumiendo que tienes un archivo de estilo llamado TransmisionEvento.css
import Logocolmena from './img/logo-colmena-seguros.png'
import WhatsAppButton from './WhatsAppButton';

const TransmisionEvento = ({ enabled = false }) => {

  const videoId = "lczTdbe_HAQ";
  const url = window.location.href;
  const hasWww = url.includes('www');
  const domain = hasWww ? "www.formar2024.com" : "formar2024.com";
  const phoneNumber = '+573142251941'; // Reemplaza con tu número de WhatsApp
  const message = '¡Hola! Tengo una pregunta'; // Mensaje predeterminado


  return (
    <div className="contenedor">

      { enabled ? (
        <>
          <div className='cont-video-chat'>
          <iframe
            title="video"
            style={{ width: '100%', height: '100%'}}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <iframe 
            title="chat"
            src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${domain}`}
            width="100%" 
            height="30%" 
            frameBorder="0" 
            allowFullscreen/>
          </div>
        </>
      ): (
        <div className='cont-seccion'>
          <div className='cont-info'>
            <p className='titulo-transmision'>El evento se habilitará el día</p>
            <p className='titulo-transmision-fecha'>Jueves 14 de Marzo 8:00am</p>
          </div>
        </div>
        
      )}
      <div className='titulo-preguntas-whatsapp'>
          <p>Si tienes alguna pregunta o incoveniente con la transmisión escríbenos</p>
          <WhatsAppButton phoneNumber={phoneNumber} message={message} />
      </div>
      <div className="logo-container">
        <img src={Logocolmena} alt="logo colmena" />
      </div>
      
  
    </div>
  
  );
}

export default TransmisionEvento;
