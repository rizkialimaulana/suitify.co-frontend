import React from 'react'
import Card from '../Card/Card';
import './featured.scss'

const Featured = ({type}) => {
    const data = [
      {
        id: 1,
        img: "https://i.pinimg.com/originals/49/be/86/49be8674d2eaaa10ff87197021db9a93.jpg",
        img2: "https://iv1.lisimg.com/image/22269373/740full-sacha-quenby.jpg",
        title: "Shirt",
        oldPrice: 60,
        price: 50,
        isNew: true
      },
      {
        id: 2,
        img: "https://i.pinimg.com/736x/b1/c4/6b/b1c46b8badd697f84a2a9ccd10193340.jpg",
        img2: "https://i.pinimg.com/originals/d1/b4/19/d1b4198d0f3d440a57db8dccc1c8048c.jpg",
        title: "Sweater",
        oldPrice: 60,
        price: 50,
        isNew: false
      },
      {
        id: 3,
        img: "https://hips.hearstapps.com/hmg-prod/images/zara-studio-21010-0090-050-04-qc-1634146246.jpg",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXbJkcaJlpe4PxW3JlbQfgXdqxeRNIa3JCU3aJrbrs2x2envZ2h_otApziehzq58GZhI&usqp=CAU",
        title: "Office wear",
        oldPrice: 60,
        price: 50,
        isNew: true
      },
      {
        id: 4,
        img: "https://static.zara.net/photos///2022/I/0/1/p/7385/548/916/2/w/438/7385548916_1_1_1.jpg?ts=1664535853960",
        img2: "https://static.zara.net/photos///2022/I/0/1/p/7385/548/916/2/w/1920/7385548916_2_3_1.jpg?ts=1664535859140",
        title: "Street",
        oldPrice: 60,
        price: 50,
        isNew: false
      },
    ];
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eius ex
          esse consequatur error sint voluptate vero nihil perspiciatis fugit!
          Molestias ipsam possimus consectetur nesciunt minus delectus amet
          alias sequi adipisci? Cum neque quibusdam numquam sapiente repudiandae
          odio quas corrupti, laboriosam illo exercitationem cumque aperiam
          accusantium magnam blanditiis vel debitis!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
            <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default Featured