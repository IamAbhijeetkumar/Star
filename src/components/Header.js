import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="head">
        <div className="logo">
          <div className='img' src="\Images\Vector.png" alt="" />
          <h3>StarClinch</h3>
        </div>
        <div className="user">HELLO, NAME</div>
      </div>
      <div className="main">
        <h1>Shortlist</h1>
        <h3>Details :</h3>
        <div className="data">
          <div>
            <h2>Event Date</h2>
            <h4>2022/02/12</h4>
          </div>
          <div>
            <h2>Location</h2>
            <h4>Delhi,India</h4>
          </div>
        </div>
        <div className="budget">
          <p>Budget</p>
          <div className='input'>₹500,000</div>
          <p className='p1'>SINGERS</p>
          <p className='p4'>Select an artist that
            matches your vibe.</p>
        </div>
      </div>
    </div>

  )
}

export default Header
