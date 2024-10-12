import { useState,useEffect, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import CartContext from "../../Contexts/CartContext";
import { useSearchParams } from "react-router-dom";

function ProductList(){
  const {productList,loading}=useContext(CartContext)
  const [searchParams]=useSearchParams();
  var searchText=searchParams.get("search");
  const filteredProductList = productList.filter((p) => p.title.toLowerCase().includes(searchText?searchText.toLowerCase():""));
  console.log("product list",ProductList)
    

    console.log("product list",productList)
    return(
        <>
        <div className="container-fluid  " >
            <div className="row ">
                <div className="col">
                    <img src="https://static.vecteezy.com/system/resources/previews/012/002/507/non_2x/halloween-sale-promotion-poster-or-banner-with-halloween-pumpkin-and-ghost-balloons-scary-air-balloons-with-product-podium-scene-website-spooky-background-or-banner-halloween-template-vector.jpg" className="img-fluid"></img>
                    </div>
            </div>
            {loading ? (
                                <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
            ) : (
            <div>
        {filteredProductList.map((p) => {
            return <ProductCard products={p}></ProductCard>;
         })}
            </div>
            )}
            </div>
   </>
    )
  }
export default ProductList;