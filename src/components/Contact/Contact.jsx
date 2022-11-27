import React from 'react'
import './contact.scss'
import { Facebook, Google, Instagram, Pinterest, Twitter } from '@mui/icons-material'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US.</span>
            <div className="mail">
                <input type="text" placeholder='Enter your email...' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <Facebook/>
                <Instagram />
                <Twitter />
                <Google />
                <Pinterest />
            </div>
        </div>
    </div>
  )
}

export default Contact