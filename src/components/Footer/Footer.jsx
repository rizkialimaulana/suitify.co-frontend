import React from 'react';
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Man</span>
          <span>Children</span>
          <span>Stores</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ's</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quia
            deleniti inventore aliquam repudiandae consectetur id iste aut
            debitis quo. Ipsa cumque animi est provident maxime mollitia
            architecto, commodi ab.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quia
            deleniti inventore aliquam repudiandae consectetur id iste aut
            debitis quo. Ipsa cumque animi est provident maxime mollitia
            architecto, commodi ab.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Suitify.co</span>
          <span className='copyright'>Copyright 2023. All rights reserved</span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer