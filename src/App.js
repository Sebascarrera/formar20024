import React from 'react';
import Formulario from './formulario.js';
import TransmisionEvento from './TransmisionEvento';

const App = () => {
  return (
    <div>
      <Formulario />
    </div>
  );
}




const transmision = () => {
  return (
    <div>
      <TransmisionEvento />
    </div>
  );
}

export default App;
