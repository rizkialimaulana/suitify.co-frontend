import React, { useState } from 'react'
import { EastOutlined, WestOutlined } from '@mui/icons-material'
import './slider.scss'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }
    const data = [
      "https://cdn.vox-cdn.com/thumbor/MXGit-n-CDWQI-VykNL0jYiKOr0=/0x37:3000x1725/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49307093/GettyImages-509643658.0.0.jpg",
      "https://www.refinery29.com/images/10378044.jpg?crop=40%3A21",
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_51/1396260/zara-catalog-today-main-181219.jpg",
    ];

  return (
    <div className='slider'>
        <div className="container" style={{ transform : `translateX(-${currentSlide * 100}vw)` }}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlined />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlined />
            </div>
        </div>
    </div>
  )
}

export default Slider