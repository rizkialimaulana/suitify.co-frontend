import React, { useState } from 'react'
import './navbar.scss'
import {
  KeyboardArrowDown,
  SearchOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart';


const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="img/flag.png" alt="" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link to='/product/1'>Women</Link>
          </div>
          <div className="item">
            <Link to='/product/2'>Men</Link>
          </div>
          <div className="item">
            <Link to='/product/3'>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to='/'>
            <h1>Suitify.co</h1>
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to='/product/1'>About</Link>
          </div>
          <div className="item">
            <Link to='/product/2'>Contact</Link>
          </div>
          <div className="item">
            <Link to='/product/3'>Stories</Link>
          </div>
          <div className="icons">
            <SearchOutlined />
            <FavoriteBorderOutlined />
            <div className="cart-icon" onClick={() => setOpen(!isOpen)}>
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
            <PersonOutlineOutlined />
          </div>
        </div>
      </div>
      {isOpen ? (
        <Cart />
      ) : null}
    </div>
  )
}

export default Navbar