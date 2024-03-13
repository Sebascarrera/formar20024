import React from 'react';
import './style.css'; // Asumiendo que tienes un archivo de estilo llamado Formulario.css
import Logo from './img/formar2024-logo.png'
import Logocolmena from './img/logo-colmena-seguros.png'

const Formulario = ({ onEnter }) => {

  const onPressEnter = (e) => {
    e.preventDefault()
    onEnter()
  }
  
  return (
    <div className="contenedor">
      <form className="form-cont">
        <div className="logo-Formar-2024"><img src={Logo} alt="Logo Formar 2024" /></div>
        <div className="registro">
          <div className="input-container">
            <p>Nombre</p>
            <div className="controls">
              <input type="text" name="nombre" id="nombre" placeholder="" required />
            </div>
          </div>
          <div className="input-container">
            <p>Cédula</p>
            <div className="controls">
              <input type="number" name="cedula" id="cedula" placeholder="" required />
            </div>
          </div>
          <div className="input-container">
            <p>Empresa</p>
            <div className="controls">
              <input type="text" name="empresa" id="empresa" placeholder="" required />
            </div>
          </div>
        </div>
        <section className="boton-start">
          <div onClick={ onPressEnter } className="boton-enlace">Ingresar al Evento</div>
        </section>
        
      </form>
      <div className="logo-container">
        <img src={Logocolmena} alt="logo colmena" />
      </div>
    </div>
    
  );
}

export default Formulario;
