import {AiFillStar,AiOutlineStar} from "react-icons/ai";

const Rating =({rating,shine,style})=>{
return(
    <>
    {
        [...Array(5)].map((_,i)=>(
            
                <span key={i} onClick={()=>shine(i)} style={style}>
                    {rating>i?(
                            <AiFillStar fontSize="15px"/>
                    ):(
                        <AiOutlineStar fontSize="15px"/>
                    )}
                </span>
            
        ))
    }
    </>
)
}
export default Rating;