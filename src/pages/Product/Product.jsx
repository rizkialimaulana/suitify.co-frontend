import React, { useState } from 'react'
import { AddShoppingCart, FavoriteBorder, Balance } from '@mui/icons-material'
import './product.scss'

const Product = () => {
  const [selected, setSelected] = useState(0)
  const [qyt, setQyt] = useState(0)
  const images = [
    "https://static.zara.net/photos///2022/I/0/2/p/8574/321/555/2/w/1920/8574321555_6_3_1.jpg?ts=1657116288580",
    "https://static.zara.net/photos///2022/I/0/2/p/8574/321/555/2/w/1920/8574321555_2_1_1.jpg?ts=1657098354983",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelected(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelected(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selected]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$299</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ex
          molestias fuga sed ab porro voluptatum ducimus architecto amet aliquam
          ut suscipit incidunt, laudantium placeat neque reprehenderit iure
          error eius?
        </p>
        <div className="quantity">
          <button onClick={() => setQyt((e) => e===0 ? 0 : e - 1)}>-</button>
          {qyt}
          <button onClick={() => setQyt((e) => e + 1)}>+</button>
        </div>
        <button className='add'><AddShoppingCart /> Add to chart</button>
        <div className="link">
          <div className="item">
            <FavoriteBorder /> Add to Wish List
          </div>
          <div className="item">
            <Balance /> Add to Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor : Zara</span>
          <span>Product Type : Shirt</span>
          <span>Tag : Shirt. Man, Top</span>
        </div>
        <div className="detail">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFO</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product