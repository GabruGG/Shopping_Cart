import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Cart from "./components/Cart";
import Home from "./components/Home";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path="/" element={ <Home/>}/>
    <Route exact path="/cart" element={ <Cart/>}/>
    </Routes>
  
    </BrowserRouter>
    </>
  );
}

export default App;
