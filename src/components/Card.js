import React, { useState } from 'react';
import "./Card.css";

const Card = ({ img1, name, profession = "Singer", location = "New Delhi", count, img2, img3, img4, }) => {

    const [select, setSelect] = useState("Select")
    const changeValue = () => {
        if (select === "Select") { setSelect("Selected") }
        else {
            setSelect("Select")
        }
    }


    return (
        <>
            <div className="flex">
                <div className="outer">
                    <img className="img" alt="/" src={img1} />
                    <div className="about">
                        <div className="info">
                            <h3>{name}</h3>
                            <h5>{profession}</h5>
                        </div>
                        <div className="location">
                            <h4>{location}</h4>
                        </div>
                        <div className="booking">
                            <h4>Event Bookings</h4>
                            <h4>{count}</h4>
                        </div>
                        <div className="gallery">
                            <img className="img1" alt="/" src={img1}></img>
                            <img className="img1" alt="/" src={img2}></img>
                            <img className="img1" alt="/" src={img3}></img>
                            <img className="img1" alt="/" src={img4}></img>
                        </div>
                        <button className="select" onClick={() => changeValue()} >{select}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
