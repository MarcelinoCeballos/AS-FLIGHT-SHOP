import * as React from 'react';
import NavBar from "./components/NavBar";
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;






