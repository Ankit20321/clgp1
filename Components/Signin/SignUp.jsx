import React from "react";
import "./signUp.css";
import vectorr1 from './vectorr1.svg';
import vectorr2 from './vectorr2.svg';
import vectorr3 from './vectorr3.svg';
import vectorr4 from './vectorr4.svg';
import rectangler4 from './rectangler4.png';

const SignUp = () => {
    return (
        <div className="sign-up-page">
            <div className="group-wrapper">
                <div className="group">
                    <div className="overlap">
                        <div className="frame">
                            <div className="text-wrapper">Welcome Back!</div>
                            <p className="already-have-an">
                                Already have an account ?<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then Sign-in
                            </p>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group">
                                    <div className="rectangle" />
                                    <div className="log-in">LOG IN</div>
                                </div>
                            </div>
                        </div>
                        <div className="div">
                            <div className="text-wrapper-2">Sign Up</div>
                            <div className="frame-2">
                                <div className="div-wrapper">
                                    <div className="vector-wrapper">
                                        <img className="vector" alt="Vector" src={vectorr4} />
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap-2">
                                        <div className="ellipse" />
                                        <img className="img" alt="Rectangle" src={rectangler4} />
                                    </div>
                                </div>
                                <div className="group-2">
                                    <div className="img-wrapper">
                                        <img className="vector-2" alt="Vector" src={vectorr3} />
                                    </div>
                                </div>
                            </div>
                            <p className="p">or create your email account</p>
                            <div className="group-3">
                                <div className="overlap-3">
                                    <img className="vector-3" alt="Vector" src={vectorr2} />
                                    <div className="text-wrapper-3">Email</div>
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="overlap-4">
                                    <img className="vector-4" alt="Vector" src={vectorr1} />
                                    <div className="rectangle-2" />
                                    <div className="text-wrapper-3">Password</div>
                                </div>
                            </div>
                            <div className="group-5">
                                <div className="overlap-5">
                                    <div className="rectangle-3" />
                                    <div className="sign-up">SIGN UP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;