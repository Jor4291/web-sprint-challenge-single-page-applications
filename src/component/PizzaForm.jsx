import {React} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const PizzaForm = (props) =>{
  console.log(props)

const specToppings = {
    "PBJ" : "House-Cut Pepperoni, Bill-E's Thick Cut Bacon Crumbles, and fresh picked garden Jalapenos",
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
        <h4>Name for the Order:</h4>
        <input type = "text"/>
        </label>
        <br/>
        <h4>Choose your Size</h4>
        <label>
            Size:
            <select name="Size">
                <option value ="Personal">Personal</option>
                <option value ="Small">Small</option>
                <option value ="Medium">Medium</option>
                <option value ="Large">Large</option>
                </select>
        </label>
        <br/>
        <h4>Choose your Sauce</h4>
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
        House-Cut Pepperoni:
            <input type = "checkbox" 
            name = "House-Cut Pepperoni"/>
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
        <br/>
        <label>
        Black Market Mozzarella:
            <input type = "checkbox" 
            name = "Black Market Mozzarella"/>
        </label>
        <br/>
        <label>
           Black Truffle Oil:
            <input type = "checkbox" 
            name = "Black Truffle Oil"/>
        </label>
        <br/>
        <label>
          Canadian Ham:
            <input type = "checkbox" 
            name = " Oven Roasted Garlic"/>
        </label>
        <br/>
        <label>
           Fresh Sliced Heirloom Tomatoes:
            <input type = "checkbox" 
            name = "Fresh Sliced Heirloom Tomatoes"/>
        </label>
        <br/>
        <label>
        <h4>Special Instructions for the Chef!</h4>
        <input type = "text"/>
        </label>
        <br/>
        <label>
            <br/>
            <button>
                Submit Your Order!
                <input type ="button"
                name = "Submit Your Order!"/>
            </button>
        </label>
       </form>
       <br/>
       </section>
       
    )
}

export default PizzaForm;