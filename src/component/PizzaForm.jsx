import {React} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const PizzaForm = (props) =>{
  console.log(props)

const specToppings = {
    "PBJ" : "Pepperoni, Bacon, and Jalapeno",
    "Margherita" : "Black Market Mozzarella, Fresh Sliced Heirloom Tomatoes, and our own House-Grown Basil",
    "White" : "Creamy Sicilian Alfredo, Oven Roasted Garlic, Organic Baby Spinach, Regiano Parmigiano, Black-Market Mozzarella, and Black Truffle Oil",
    "BigPig" : "House-Made Hickory BBQ Sauce, Bill-E's Thick Cut Bacon Crumbles, Canadian Ham, Pepperoni, and Salami",
};


  const {specialty} = useParams()
 return(

    
        <section className = 'specialty-form'>
        <h3> Thanks for ordering a delicious {specialty} Pizza! </h3>
        <p>Your {specialty} comes with our freshest and best possible ingredients! {specToppings[specialty]}! Feel free to add some extra toppings for a small fee!</p>
       
       <form>
        <label>
        Name for the Order:
        <input type = "text"/>
        </label>
        <label>
            Sauce:
            <select name="Sauce">
                <option value ="Old Family Recipe Marinara">Old Family Recipe Marinara</option>
                <option value ="Creamy Sicilian Alfredo">Creamy Sicilian Alfredo</option>
                <option value ="House-Made Hickory BBQ Sauce">House-Made Hickory BBQ Sauce</option>
                <option value ="Spicy Blazin' Buffalo Sauce">Spicy Blazin' Buffalo Sauce</option>
                </select>
        </label>
        <h4>Extra Toppings</h4>
        <label>
           Pepperoni:
            <input type = "checkbox" 
            name = "Pepperoni"/>
        </label>
        <br/>
        <label>
           Bill-E's Bacon:
            <input type = "checkbox" 
            name = " Bill-E's Bacon"/>
        </label>
        <br/>
        <label>
           Oven Roasted Garlic:
            <input type = "checkbox" 
            name = " Oven Roasted Garlic"/>
        </label>
        <br/>
        <label>
           Organic Baby Spinach:
            <input type = "checkbox" 
            name = "Organic Baby Spinach"/>
        </label>
        
       </form>
    


       </section>
    )
}

export default PizzaForm;