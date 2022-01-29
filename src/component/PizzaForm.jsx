import {React} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const PizzaForm = (props) =>{
  console.log(props)

  const params = useParams()
 return(
        <>
        <h3> Thanks for ordering a delicious {params.specialty} add to your order or customize a pizza bellow </h3>
        </>
    )
}

export default PizzaForm;