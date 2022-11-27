import React from 'react'
import { Link } from 'react-router-dom'
import './categories.scss'
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://mediaslide-europe.storage.googleapis.com/brooks/pictures/585/7373/large-1619173859-0a9f7e677a6735e01387b8dfe62d7586.jpg"
            alt=""
          />
          <button>
            <Link to="/product/1">Sales</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://www.kidzmanagement.nl/wp-content/uploads/2019/07/Kindermodellenbureau-Kidzmanagement-modellenbureau-kind-baby-model-ZARA-KIDS-JONAH-2-1024x1024.jpg"
            alt=""
          />
          <button>
            <Link to="/product/1">Children</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://i.pinimg.com/736x/88/3e/67/883e67cbe62f845e6403316549ca1fe2.jpg"
            alt=""
          />
          <button>
            <Link to="/product/1">Man</Link>
          </button>
        </div>
      </div>
      <div className="col col-lg">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://static.independent.co.uk/2021/10/06/13/newFile-2.jpg?quality=75&width=982&height=726&auto=webp"
                alt=""
              />
              <button>
                <Link to="/product/1">Outer</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://list.lisimg.com/image/17027768/500full.jpg"
                alt=""
              />
              <button>
                <Link to="/product/1">Women Outer</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://c.files.bbci.co.uk/51D9/production/_108235902_zara-fall-2019.jpg"
            alt=""
          />
          <button>Women</button>
        </div>
      </div>
    </div>
  );
}

export default Categories