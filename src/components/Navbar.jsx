import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import  Logo from "../images/Logo.png";
import Search from "../images/search.png";

const Navbar = () => {
  return (
    <>
    <div className="navbar_overall_container">
        <div className="navbar_main">
            <Link className="home_logo">
                <img src={Logo} alt="" />
            </Link>

            <div className="navbar_right">
                <div className="navbar_input_box">
                    <input type="text" placeholder="Search products, categories and Brands" />
                    <img src={Search} alt="search " />
                </div>

                <div className="navbar_vendor_box">
                    <Link className="vendor_link">Become a Vendor</Link>
                </div>

                <div className="navbar_buttons_box">
                    <Link className="login_btn">Login</Link>
                    <Link className="started_btn">Get Started</Link>
                </div>
            </div>
        </div>
    </div>  

    </>
  )
}

export default Navbar;