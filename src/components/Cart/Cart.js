// Cart.js
import { useContext } from 'react';
import CartContext from '../../Contexts/CartContext';
import ProductList from '../ProductList/ProductList';

function Cart() {
    const { cartItems, removeFromCart, clearCart, incrementQuantity, decrementQuantity,calculateTotal} = useContext(CartContext);
   
    const totalAmount = calculateTotal();  // Call the function to get total

    return (
        <>
        <div className=" container cart-container mt-4 " style={{marginBottom:43}}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
            <div>
                <table class="table">
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                    <th>Remove</th>
                    
                    </tr>
                </thead>
                <tbody>
                {cartItems.map((item) => (
                    <tr>
                    <td><img src={item.image} className='img-fluid' style={{width:50}}></img></td>
                    <td><h5>{item.title}</h5></td>
                    <td>Price: ₹{item.price}</td>
                    <td> <p>{item.quantity}</p></td>
                    <td>
                        <div className='row'>
                            <div className='col-md-3'><button className='btn btn-dark' onClick={() => incrementQuantity(item.id)}>+</button></div>
                            <div className='col-md-3'>
                               <button className='btn btn-dark' onClick={() => decrementQuantity(item.id)}>-</button>  
                            </div>
                        </div>
                    </td>
                    <td><div className='col-md-2'><button className='btn btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button></div>
                    </td>
                    </tr>
                    ))}
                     
                </tbody>
            </table>
    <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4> {/* Display total */}
    </div>
 )}
            
            <div className='row align-items-center mt-3'>
          <div className="col-md-6 col-12">
              <div className="card mb-3">
                  <div className="card-body">
                      <h5 className="card-title mb-2 ">Cart Total Details</h5>
                      <hr />
                      <p>Shipping Fee: Free</p>
                      <hr />
                      <p>Total:{calculateTotal()} </p>
                      <hr />
                      <button className="btn btn-warning btn-block pay-btn">Proceed to Pay</button>
                      <button className="btn btn-danger btn-block pay-btn mx-2" onClick={()=>clearCart()}>Clear All</button>
                  </div>
              </div>
          </div>
          <div className="col-md-6 col-12">
              <div className="input-group">
                  <input type="text" className="form-control promocode-input" placeholder="Enter Promo Code" />
                  <button className="btn btn-secondary promocode-btn">Submit</button>
              </div>
          </div>
          </div>
        
        
        </div>
          
          </>
    );
}

export default Cart;
