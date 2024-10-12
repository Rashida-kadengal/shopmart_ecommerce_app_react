import { useContext,useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import CartContext from '../../Contexts/CartContext';
import "../../Styles/Header.css"
function Header() {
    const {count,getTotalCartItem }=useContext(CartContext)
    const [searchText,setSearchText]=useState('')
    const typeSearchText=($e)=>{
        setSearchText($e.target.value)

    }
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Shopmart</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/'}>Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/products'}>Products</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/about-us'}>About Us</NavLink>
                        </li>
                    </ul>
                    <form class="d-flex me-5">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={typeSearchText} />
                        <NavLink to={'/products?search='+searchText} className="btn btn-outline-success">Search</NavLink>
                    </form>
                    <ul class="navbar-nav ms-5  mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/contactus'}>Contact Us</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link position-relative" to="/cart"><i class="fa-solid fa-cart-shopping"></i>
                              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {count > 0 ? count : null}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
       
        </>
    );
}
export default Header;