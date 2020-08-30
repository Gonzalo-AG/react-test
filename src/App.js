import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nombre = "Agus"
  return(
    <div className="App">
      <Texto nombre="asd"></Texto>
    </div>
  );
}

function Ejecutar () {
  console.log("ejecutado")
}

function Texto(props) {
  return(
    <p onClick={Ejecutar}
      >
      {"hola " + props.nombre}
    </p>
  )
}

export default App;
