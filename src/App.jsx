import React from "react";
import {Switch, Route, Link } from 'react-router-dom';
import PizzaForm from "./component/PizzaForm.jsx";

const App = () => {
  return (
    <>
      <header>
        <h1>Bloom Bites Pizzeria</h1>
       
        <nav>
          <Link to ="/">Home</Link>
          <h2>
            Try one of our great specialty pizzas or make your own!
          </h2>
          
          <Link to ="/PizzaForm/PBJ">specialty PBJ</Link>
          <br></br>
          <Link to ="/PizzaForm/Margarita">Margarita</Link>
          <br></br>
          <Link to ="/PizzaForm/White">White</Link>
          <br></br>
          <Link to ="/PizzaForm/BigPig">BigPig</Link>
        </nav>
        <br></br>
        <img src="../Assets/Pizza.jpg" alt="fresh hot pizza"/>
      </header>

    <main>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route exact path ="/PizzaForm/:specialty">
          <PizzaForm/>
        </Route>
      </Switch>
    </main>
     
    

      
    </>
  );
};
export default App;

