import * as React from 'react';
import NavBar from "./components/NavBar"
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer
        greeting="Todo para Volar"/>     
    </div>
  );
}

export default App;






