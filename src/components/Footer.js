import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="foot_logo">
                    <div className='img' src="\Images\Vector.png" alt="" />
                    <h3>StarClinch</h3>
                </div>
                <ul>
                    <li><a href="/"><img alt="/" src="Images/Vector(2).png" /></a></li>
                    <li><a href="/"><img alt="/" src="Images/Vector(3).png" /></a></li>
                    <li><a href="/"><img alt="/" src="Images/Vector(4).png" /></a></li>
                    <li><a href="/"><img alt="/" src="Images/Vector(5).png" /></a></li>
                </ul>
                <div className="main_foot">

                    <div className="left">
                        <div>
                            <h4>FOR BUYERS</h4>
                            <ul>
                                <li><a href="/">Our Buyers</a></li>
                                <li><a href="/">Browse</a></li>
                                <li><a href="/">Post Your Requirement</a></li>
                                <li><a href="/">Entertainment on EMI</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>ABOUT US</h4>
                            <ul>
                                <li><a href="/">Our Story</a></li>
                                <li><a href="/">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <h4>FOR ARTISTS</h4>
                            <ul>
                                <li><a href="/">Login</a></li>
                                <li><a href="/">Artist SignUp</a></li>
                                <li><a href="/">Artist Subscriptions</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4>POLICY</h4>
                            <ul>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms of Use</a></li>
                                <li><a href="/">Disclaimer</a></li>
                                <li><a href="/">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="add">
                    <h2>REGISTERED OFFICE ADDRESS:</h2>
                    <h3>VINSM Globe Private Limited
                        Percept House, Ground Floor
                        East of Kailash, New Delhi<br />
                        CIN: U52605DL2012PTC236944
                        Phone: +91 11 498 498 01
                    </h3>
                </div>
                <div className="contacts">
                    <h4>Contact Us</h4>
                    <img src="Images/payment.png.png" alt="" />
                    <h6>© Copyright 2015-2023 | VINSM Globe Pvt. Ltd. | All Rights Reserved.</h6>
                </div>
            </div>

        </>
    )
}

export default Footer
