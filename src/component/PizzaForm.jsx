import {React} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const PizzaForm = (props) =>{
  console.log(props)

const specToppings = {
    "PBJ" : "Pepperoni, Bacon, Jalapeno",
    "Margherita" : "Black Market Mozzarella, Fresh Sliced Heirloom Tomatoes, House-Grown Basil",
    "White" : "Creamy Sicilian Alfredo, Oven Roasted Garlic, Organic Baby Spinach, Regiano Parmigiano, Black-Market Mozzarella, Truffle Oil",
    "BigPig" : "Bill-E's Thick Cut Bacon Crumbles, Canadian Ham, Pepperoni, Salami",
};


  const {specialty} = useParams()
 return(

    
        <section className = 'specialty-form'>
        <h3> Thanks for ordering a delicious {specialty} Pizza! </h3>
        <p>Your {specialty} comes with {specToppings[specialty]}! Feel free to add some extra toppings for a small fee!</p>
       
    


       </section>
    )
}

export default PizzaForm;