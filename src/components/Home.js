import { CartState } from "./context/Context";
import Filters from "./Filters";
import Product from "./Product";
const Home = () => {
    const {state:{products},prodState:{sort,byRating,byStock,byFastDelivery,searchQuery}}=CartState();

    const tranformProd=()=>{
        let sortProd=products;

        if(sort){
            sortProd=sortProd.sort((a,b)=>
            sort==="lowtohigh"?a.price-b.price:b.price-a.price
            )
        }
        if(!byStock){
            sortProd=sortProd.filter((prod)=>prod.inStock);
        }
        if(byFastDelivery){
            sortProd=sortProd.filter((prod)=>prod.fastDelivery);
        }
        if(byRating){
            console.log(byRating);
            sortProd=sortProd.filter((prod)=> prod.ratings >= byRating);
        }
        if(searchQuery){
            sortProd=sortProd.filter((prod)=>
            prod.name.toLowerCase().includes(searchQuery)
            );
        }
        
         return sortProd;
    }
  return (
      <div className="home">
          <Filters/>
          <div className="productContainer">
             {tranformProd().map((prod)=>{
                  return <Product prod={prod} key={prod.id} />
              })}
          </div>
      </div>
  );
}

export default Home;