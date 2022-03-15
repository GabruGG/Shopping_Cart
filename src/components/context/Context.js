import React, { createContext,useContext,useReducer } from 'react';
import faker from 'faker';
import { cartReducer } from './Reducer';
import { prodReducer } from './Reducer';
const Cart=createContext();
faker.seed(99);

const Context = ({children}) => {
  const stockArr=[0,3,5,7,8];
  const ratingArr=[1,2,3,4,5];
    const products=[...Array(30)].map(()=>({
        id: faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.random.image(),
        inStock:stockArr[(Math.floor(Math.random()*5))],
        fastDelivery:faker.datatype.boolean(),
        ratings:ratingArr[(Math.floor(Math.random()*5))]
    }));
    const [state,dispatch]=useReducer(cartReducer,{
        products:products,
        cart:[]
    });

    const [prodState,prodDispatch]=useReducer(prodReducer,{
      sort:"",
      byStock:false,
      byFastDelivery:false,
      byRating:0,
      searchQuery:"",
    })

  return (
    <Cart.Provider value={{state,dispatch,prodState,prodDispatch}}>{children}</Cart.Provider>
  )
}

export default Context;

export const CartState=()=>{
    return useContext(Cart);
}