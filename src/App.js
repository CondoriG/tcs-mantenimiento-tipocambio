import React, { Component } from 'react';
//import './App.css';
import './App2.css';
import "react-table/react-table.css";
import Navegacion from './Componentes/Navegacion';
import Tabla from './Componentes/Tabla';

class App extends Component {

  render() {

    return (
      <div>
        <Navegacion />
        <div>
          <Tabla />
        </div>
      </div>

    );
  }

}

export default App;





//Pago-row.js