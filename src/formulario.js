import React from 'react';
import './style.css'; // Asumiendo que tienes un archivo de estilo llamado Formulario.css

const Formulario = () => {
  return (
    <div className="contenedor">
      <form className="form-cont">
        <div className="logo-Formar-2024"><img src="/src/img/formar2024-logo.png" alt="Logo Formar 2024" /></div>
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
        </div>
        <section className="boton-start">
          <a href="TransmisionEvento.js" className="boton-enlace">Ingresar al Evento</a>
        </section>
      </form>
    </div>
  );
}

export default Formulario;
