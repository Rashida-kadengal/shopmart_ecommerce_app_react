import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import CartContext from '../../Contexts/CartContext';
import {toast} from 'react-toastify';
import "../../Styles/ProductDetail.css";
import 'react-toastify/dist/ReactToastify.css'


function ProductDetail() {
    const params = useParams();
    const prodId = params.productId;
    const [product, setProduct] = useState({});
    const navigate=useNavigate();
    const { addToCart,counter } = useContext(CartContext);
 
    const loadProductById = () => {
        fetch("https://fakestoreapi.com/products/" + prodId)
            .then((response) => {
                response
                    .json()
                    .then((data) => {
                        setProduct(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        loadProductById();
    }, [prodId]);

    console.log("product in detail",product)
    


    const handleAddToCart = () => {
        addToCart(product);
        console.log("Added to Cart:", product);
        toast.success(product.title + " added to cart")
        counter();
        
    };



    return (
        <>
            <div className='container'>
                <div className='row  p-5'>
                    <div className='col-md-6 d-flex justify-content-center align-items-center cardprd'>

                        <img className='img-fluid w-50' src={product.image}></img>
                    </div>
                    <div className='col-md-6 p-5'>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price:₹{product.price}</p>
                        <p>Rating:<i class="fa-regular fa-star text-warning"></i>{product.rating && product.rating.rate ? product.rating.rate : "no rating"}({product.rating && product.rating.count ? product.rating.count : "no count"})</p>
                        <button className='btn btn-warning mt-3' onClick={handleAddToCart}>Add to cart</button>

                    </div>
                </div>

            </div>

        </>
    );
}
export default ProductDetail