import { useState,useEffect } from "react";
import { Button, ListGroup,Row,Col, Form,Image } from "react-bootstrap";
import {CartState} from "./context/Context";
import Rating from "./Rating";
import {AiFillDelete} from 'react-icons/ai';

const Cart=()=>{
    const{state:{cart},dispatch}=CartState();
    const [total,setTotal] = useState();

    useEffect(() => {
      setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0));
    }, [cart])
    
    return(
       <div className="home">
           <div className="productContainer">
               <ListGroup>
                   {
                       cart.map(prod=>(
                           <ListGroup.Item key={prod.id}>
                               <Row>
                                   <Col md={2}>
                                   <Image src={prod.image} alt={prod.name} fluid rounded/>
                                   </Col>
                                   <Col md={2}>
                                   <span>{prod.name}</span>
                                   </Col>
                                   <Col md={2}>
                                   <span>Rs.{prod.price}</span>
                                   </Col>
                                   <Col md={2}>
                                   <span><Rating rating={prod.ratings}/></span>
                                   </Col>
                            
                               <Col md={2}>
                                   <Form.Control as="select" value={prod.qty}
                                   onChange={(e)=>
                                   dispatch({
                                       type:"CHANGE_CART_QTY",
                                       payload:{
                                           id:prod.id,
                                           qty:e.target.value
                                       }
                                   })}>
                                       {
                                           [...Array(prod.inStock)].map((_,index)=>(
                                                <option key={index+1}>{index+1}</option>
                                           ))
                                       }
                                    </Form.Control>
                                </Col>
                                <Col>
                               <Button type="button" variant="light" onClick={()=>
                                dispatch({
                                    type:"REMOVE_FROM_CART",
                                    payload:prod
                                })
                                }>
                                    <AiFillDelete fontSize="20px"/>
                               </Button>
                                
                                </Col>
                                </Row>
                           </ListGroup.Item>
                           
                       ))
                   }
               </ListGroup>

            </div>
            <div className="filters summary">
                <span className="title">Subtotal ({cart.length}) items</span>
                <span style={{fontWeight:700,fontSize:20}}>Total:Rs.{total}</span>
                <Button type="button" disabled={cart.length===0}>Proceed To CheckOut</Button>
            </div>
       </div>
    );
}
export default Cart;