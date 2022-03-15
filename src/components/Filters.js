import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "./context/Context";

const Filters=()=>{
    

    const {prodState:{byStock,byRating,byFastDelivery,sort},prodDispatch} =CartState();
return(
    <div className="filters">
    <span className="title">Filter Products</span>
    <span>
        <Form.Check
        inline 
        label="Low To High"
        name="group1"
        type="radio"
        id={`inline-1`}
        onChange={()=>prodDispatch({
            type:"FILTER_BY_PRICE",
            payload:"lowtohigh"
        })}
        checked={sort==="lowtohigh"?true:false}
        />
    </span>

    <span>
        <Form.Check
        inline 
        label="High To Low"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={()=>prodDispatch({
            type:"FILTER_BY_PRICE",
            payload:"hightolow"
        })}
        checked={sort==="hightolow"?true:false}
        />
    </span>
    <span>
        <Form.Check
        inline 
        label="Include Out Of Stock"
        name="group1"
        type="checkbox"
        id={`inline-3`}
        onChange={()=>prodDispatch({
            type:"FILTER_BY_STOCK"
        })}
        checked={byStock}
        />
    </span>
    <span>
        <Form.Check
        inline 
        label="Fast Delivery Only"
        name="group1"
        type="checkbox"
        id={`inline-4`}
        onChange={()=>prodDispatch({
            type:"FILTER_BY_DELIVERY"
        })}
        checked={byFastDelivery}
        />
    </span>
    <span>
    <label style={{paddingRight:10}}>Rating:</label>
    <Rating shine={(index)=>prodDispatch({
        type:"FILTER_BY_RATING",
        payload:index+1
    })} rating={byRating} style={{cursor:"pointer"}}/>
    
    </span>
    
    <Button variant="light"  onClick={()=>prodDispatch({
            type:"CLEAR_FILTERS",
        })}>
        Clear Filters</Button>
    </div>
);
}
export default Filters;