import React, { createContext, useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [quantity,setQuantity]=useState(0)

  const counter = () => {
    setCount((prevCount) => prevCount + 1);
  };



   const [loading, setLoading] = useState(false);
   const[productList,setProductList]=useState([]);

 

const loadProducts = () => {
   console.log("loadProducts");
setLoading(true); //show the loading message
   fetch("https://fakestoreapi.com/products")
     .then((response) => {
       response
         .json()
         .then((data) => {
           setProductList(data);
         })
         .catch((error) => {
           console.log(error);
         });
     })
     .catch((error) => {
       console.log(error);
     }).finally(() => {
         setLoading(false); // Hide the loading message
       });
 };

useEffect(() => {
  loadProducts();
}, []);


  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If it exists, increment the quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If it doesn't exist, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };


  const clearCart = () => {
    setCartItems([]);
    setCount(0);
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    counter(); // Call the counter function to increment the count
  };


  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
    cartItems.map((item) => {
      return setCount(count - item.quantity);
    });
  };



  const decrementer = () => {
    setCount((prevCount) => prevCount - 1);
  };

const decrementQuantity  = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId) {
          if (item.quantity === 1) {
            return null;
          }
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }).filter(Boolean);
  });
  decrementer()
  };







  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
        count,
        counter,
        productList,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
