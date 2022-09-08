import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import * as React from 'react';
import NavBar from "./components/NavBar";
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/> Muestra todos los productos
      <Route path='/category/:idcategory' element={<ItemListContainer/>}></Route>      
    </Routes>
    <ItemCount />
    </BrowserRouter> 
     
  );
}

export default App;






