import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import './products.scss'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          <div className="input-item">
            <input type="checkbox" value={1} id="1" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="input-item">
            <input type="checkbox" value={2} id="2" />
            <label htmlFor="2">Skirt</label>
          </div>
          <div className="input-item">
            <input type="checkbox" value={3} id="3" />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filter-item">
          <h2>Filter by Price</h2>
          <div className="input-item">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort by</h2>
          <div className="input-item">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="input-item">
            <input
              type="radio"
              name="desc"
              id="desc"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://fashionablymale.net/wp-content/uploads/2013/11/bershka-man-november-20133.jpg"
          alt=""
          className="catImg"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}

export default Products