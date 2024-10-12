import "../../Styles/ProductCard.css"
import {Link} from 'react-router-dom'
import { useState } from 'react';
function ProductCard(props){
    var prod=props.products; 
    return(
        <>

        <div className="card d-inline-block cardprd mx-3 my-3 " >

  <img src={prod.image} className="card-img-top"  />

  <div class="card-body">
    <h5 class="card-title"
            style={{
                height: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>{prod.title}</h5>
               <h5 className="card-title fw-normal fs-5">MRP:<span className="fw-bold">${prod.price}</span><del className="text-danger ms-2">${(prod.price * 1.2).toFixed(2)}</del></h5>
              <h5 className='card-title fw-normal fs-6'><i class="fa-regular fa-star text-warning"></i>{prod.rating.rate}({prod.rating.count})</h5>
    <p class="card-text"   style={{
                height: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>{prod.description}</p>

    <Link className='btn btn-warning' to={"/products/" + prod.id}>View Product</Link>
   
  </div>
</div>
</>
    );
}
export default ProductCard;