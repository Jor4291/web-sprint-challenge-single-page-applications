import {React} from 'react';



const pizzaForm = (props) =>{
    console.log(props)
 return(
        <>
        <h2> Order & Create your own Pizza Here!</h2>
        <img src ="../Assets/Pizza.jpg" alt="delicious fresh pizza"/>
        <form id = 'name-input'>
            <input name=""  type="text"/>
        </form>
        <form id = 'pizza-form'/>
            
        </>
    )
}

export default pizzaForm;