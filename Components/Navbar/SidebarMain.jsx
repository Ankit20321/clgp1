import React from 'react';
import "./sidebarmain.css";
import vector from "./vector.svg";
import vector1 from "./vector1.svg";
import vector2 from "./vector2.svg";
import vector3 from "./vector3.svg";
import vector4 from "./vector4.svg";
import vector5 from "./vector5.svg";

const SidebarMain = () => {
    return (
        <div>
            <div className='front-logged-in'>
                <div className="div">
                    <div className="rectangle-11" />
                    <div className="home">
                        <div className="text-wrapper-11">History</div>
                        <img className="vector-4" alt="Vector" src={vector5} />
                        <div className="text-wrapper-12">Setting</div>
                        <img className="vector-5" alt="Vector" src={vector4} />
                        <div className="text-wrapper-13">Explore</div>
                        <div className="text-wrapper-14">Favourite</div>
                        <div className="frame-3">
                            <div className="text-wrapper-15">About</div>
                        </div>
                        <img className="vector-6" alt="Vector" src={vector3} />
                        <img className="vector-7" alt="Vector" src={vector2} />
                        <img className="vector-8" alt="Vector" src={vector1} />
                        <div className="overlap-5">
                            <img className="vector-9" alt="Vector" src={vector} />
                            <div className="text-wrapper-16">Home</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarMain
