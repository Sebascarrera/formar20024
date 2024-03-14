import React, { useEffect, useState } from 'react';
import './style.css'; // Asumiendo que tienes un archivo de estilo llamado Formulario.css
import Logo from './img/formar2024-logo.png'
import Logocolmena from './img/logo-colmena-seguros.png'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from './redux/user';

const Formulario = ({ onEnter }) => {

  const dispatch = useDispatch()
  const status = useSelector( state => state.user.status)

  const [formData, setFormData] = useState({
    name: '',
    document: '',
    company: '',
  })

  const sendData = (event) => {
    event.preventDefault()
    dispatch(createUser(formData))
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect( () => {
    if(status == 'succeded') {
      onEnter()
    }
  }, [status])
  
  return (
    <div className="contenedor">
      <form className="form-cont" onSubmit={sendData}>
        <div className="logo-Formar-2024"><img src={Logo} alt="Logo Formar 2024" /></div>
        <div className="registro">
          <div className="input-container">
            <p>Nombre</p>
            <div className="controls">
              <input type="text" name="name" id="nombre" value={formData.name} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="input-container">
            <p>Cédula</p>
            <div className="controls">
              <input type="number" name="document" id="cedula" value={formData.document} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="input-container">
            <p>Empresa</p>
            <div className="controls">
              <input type="text" name="company" id="empresa" value={formData.company} onChange={handleInputChange} required />
            </div>
          </div>
        </div>
        <section className="boton-start">
          <button disabled={status === 'loading'} className="boton-enlace">
            { status === 'loading' ? (
              "Cargando..."
            ): (
              "Ingresar al Evento"
            )}
          </button>
        </section>
        
      </form>
      <div className="logo-container">
        <img src={Logocolmena} alt="logo colmena" />
      </div>
    </div>
    
  );
}

export default Formulario;
