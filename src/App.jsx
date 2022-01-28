import React from "react";
import {Switch, Route, } from 'react-router-dom';
import PizzaForm from "./component/PizzaForm.jsx";

const App = () => {
  return (
    <>
      <header>
        <h1>Bloom Bites Pizzeria</h1>
       
        <nav>
          <button to ="/">Home</button>
          <h2>
            Click on the Button to get started with your order!
          </h2>
          <button to ="/PizzaForm">Order here!</button>
        </nav>
        <img src="../Assets/Pizza.jpg" alt="fresh hot pizza"/>
      </header>

    <main>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route exact path ="/PizzaForm">
          <PizzaForm/>
        </Route>
      </Switch>
    </main>
     
    

      
    </>
  );
};
export default App;

