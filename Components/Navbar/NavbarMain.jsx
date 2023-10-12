import React from "react";
import "./navbarmain.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ellipse1 from './ellipse1.png';
import vector6 from "./vector6.svg";
import vector7 from "./vector7.svg";
import vector8 from "./vector8.svg";



const NavbarMain = () => {
    return (
        <div className="front-logged-in">

            <header className="header">
                <div className="rectangle-7" />
                <p className="travel-reads">
                    <span className="span">Travel</span>
                    <span className="text-wrapper-5">Reads</span>
                </p>
                <input className="rectangle-8" type="text" placeholder="Search" />
                <img className="vector" alt="Vector" src={vector8} />
                <div className="text-wrapper-6"></div>
                <img className="vector-2" alt="Vector" src={vector7} />
                <div className="text-wrapper-7">Indore</div>
                <img className="vector-3" alt="Vector" src={vector6} />
                <div className="ellipse" />
                <Link className="nav-link" to="/SignIn"> <img className="ellipse-2" alt="Ellipse" src={ellipse1} /></Link>
            </header>
            <div className="overlap-group-3">
            </div>
            <Outlet />
        </div>

    );
};

export default NavbarMain;