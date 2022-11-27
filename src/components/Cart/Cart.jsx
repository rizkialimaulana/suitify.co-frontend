import React from 'react'
import './cart.scss'
import {DeleteOutline} from '@mui/icons-material'

const Cart = () => {
    const data = [
      {
        id: 1,
        img: "https://i.pinimg.com/originals/49/be/86/49be8674d2eaaa10ff87197021db9a93.jpg",
        title: "Shirt",
        desc: "Shirt for woman with the cutton materials",
        oldPrice: 60,
        price: 50,
        isNew: true,
      },
    ];
  return (
    <div className='cart'>
        <h1>Your Cart</h1>
        {data?.map((item) => (
            <div className="item" key={item.id}>
                <img src={item.img} alt=""/>
                <div className="detail">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">
                        1 x {item.price}
                    </div>
                </div>
                <DeleteOutline className='delete'/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$112</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset cart</span>
    </div>
  )
}

export default Cart