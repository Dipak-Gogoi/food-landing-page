import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <input type="checkbox" id="check" />
                <label htmlFor="check" >
                    <MenuIcon className="checkbtn"/>
                </label>
                <h1>Lorem Ipsum</h1>
                <h1 className="mobile_head">Lorem</h1>
                
                <div className="sidebar_list">
                    <a className="active" href="#home">About</a>
                    <a href="#news">Services</a>
                    <a href="#contact">Cuisine</a>
                    <a href="#about">Gallery</a>
                    <a href="#about">Contact</a>
                    <a href="#about">Book</a>
                </div>
                <button className="btn-cart">Cart</button>
                <ShoppingCartIcon className="shop_cart"/>
            </div>
            
        </>
    );
}

export default Sidebar;