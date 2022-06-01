import React from 'react';
import { crearPersonajes } from '../../services/crearPersonajes';
import { Lista } from '../lista';
import './App.css';

function App() {
    const personajes = crearPersonajes();
    console.log(personajes);
  return (
    <div className="App">
        <Lista personajes={personajes} />
    </div>
  );
}

export default App;
