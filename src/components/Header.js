import React from 'react';
import { Badge, Container, Dropdown, FormControl, Navbar,Nav,Button } from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { CartState } from './context/Context';
import {AiFillDelete} from 'react-icons/ai';


const Header = () => {


    const {state:{cart},dispatch,prodDispatch}=CartState();

    
  return (
    <>
    <Navbar bg="dark" variant="dark" style={{height:80}}>
    <Container>
        <Navbar.Brand>
            <Link to='/'>Shopping Cart </Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl className='m-auto' style={{width:500}}
            onChange={(e)=>prodDispatch({
                type:"SORT_BY_SEARCH",
                payload:e.target.value
            })}
            placeholder="Search a products">
            </FormControl>
        </Navbar.Text>
        <Nav>
            <Dropdown alignright="true">
                <Dropdown.Toggle style={{marginLeft:"50px"}} variant='success'>
                    <FaShoppingCart  color='white' fontSize="30px"/>
                    <Badge className='badge'>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu  style={{minWidth:370,marginLeft:"-160px"}}>
                    {cart.length>0 ?(
                        <>
                        {
                        cart.map(prod=>(
                            <span className='cartitem' key={prod.id}>
                            <img 
                            className='cartImage'
                            alt={prod.name}
                            src={prod.image}/>
                            <div className='cartItemDetail'>
                                <span>{prod.name}</span>
                                <span>Rs.{prod.price.split(".")[0]}</span>
                            </div>
                            <AiFillDelete
                            fontSize="20px"
                            style={{cursor:"pointer"}}
                            onClick={()=>
                                dispatch({
                                    type:"REMOVE_FROM_CART",
                                    payload:prod
                                })}
                            />
                            </span>
                        ))
                        }
                        <Link to="/cart">
                            <Button style={{width:'95%',margin:"0 10px"}}>Go to Cart</Button>
                        </Link>
                        </>
                    ):(
                        <span style={{padding:10}}>Cart is Empty!</span>
                    )}
                
                </Dropdown.Menu>
            </Dropdown>
        </Nav>   
        
    </Container>

    </Navbar>
    </>
  )
}

export default Header;