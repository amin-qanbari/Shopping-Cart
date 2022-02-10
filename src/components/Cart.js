import React, { useContext } from 'react'

//helper
import { shorten } from '../helper/function'

//bootstrao
import { Button} from 'react-bootstrap'

//context
import { cartContext } from '../context/CartContextProvider'

const Cart = ({data}) => {
    const {dispatch} = useContext(cartContext)
    const {image , price , title , quantity} = data
  return (
    <div className='d-flex justify-content-between align-items-center shadow border rounded px-3 my-4'>
        <img src={image} alt="product" style={{width:"60px" , height:"70px"}} />
        <div>
            <h4>{shorten(title)}</h4>
            <p>{price} $</p>
        </div>
        <div>
            <span>{quantity}</span>
        </div>
        <div>
            {quantity > 1 ?
            <Button onClick={() => dispatch({type:"DECREASE" , payload : data})}>-</Button> :
            <Button onClick={() => dispatch({type:"REMOVE_ITEM" , payload:data})}><i className='fa fa-trash-can'></i></Button>
        }
       
        <Button className='mx-2 translate-' onClick={() => dispatch({type:"INCREASE" , payload:data})}>+</Button>
        </div>
    </div>
  )
}

export default Cart