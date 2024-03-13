import React, { useState } from 'react';
import Formulario from './formulario';
import TransmisionEvento from './TransmisionEvento';

const App = () => {

  const [showingTransmision, setShowingTransmision] = useState(false);

  return (
    <div>
      { showingTransmision ? (
        <TransmisionEvento enabled={false} />
      ): (
        <Formulario onEnter={ () => {
            // TODO: validar que la cedula exista, y si existe
            setShowingTransmision(true)
        }}/>
      )}
    </div>
  );
}

export default App;
