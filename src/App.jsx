import React from "react";
import {Switch, Route} from 'react-router-dom';
// import pizzaForm from "./component/Pizza";

const App = () => {
  return (
    <>
      <header>
        <Switch>
          <Route exact path ="/">
      <h1>Bloom Bites</h1>
      <button href="/">Home</button>
      </Route>
      </Switch>
      </header>
     <p>The best pizza on the web!</p>
     
    
      <main>
       <Switch>
         <Route exact path ="/Pizza.jsx">
           <button href ="/Pizza.jsx"> click on the button to make a pizza</button>
         </Route>
        </Switch>
      </main>
      
      
    </>
  );
};
export default App;

