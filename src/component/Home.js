import React from 'react'
import './css/home.css';
import image1 from './image/backgroundImg/william-thomas-ny6tO4ItOEY-unsplash.jpg'
import image2 from './image/backgroundImg/pexels-kaique-rocha-243757.jpg'
import image3 from './image/backgroundImg/sergey-sokolov-yxJavcfExYs-unsplash.jpg'
import Carousel from 'react-bootstrap/Carousel';
import myphoto from './image/Happy Sunshine PNG - Free Download-modified.png'


export default function Home() {
    // style for the carousels of react bootstrap
    // external css didn't work cause of the reactbootstrap
    const carouselBox = { height: "70vh", width: "70vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }
    const carouselContent = { paddingInline: "20px", paddingBlock: "10vh", border: "1px solid rgba(255, 255, 255, 0.16)", borderRadius: "10px", backdropFilter: "blur(3px)", display: "flex", flexDirection: "column", alignItems: "left", textAlign: "left" }


    return (
        <>
            <div className="home-content">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="carousel-box" style={carouselBox}>
                                <div className='carousel-content' style={carouselContent}>
                                    <img src={myphoto} alt="MyPicture" style={{ width: "120px", height: "120px" }} />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quo officiis blanditiis possimus laboriosam excepturi repellendus. Placeat corrupti illum neque.
                                </div>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div className="carousel-box" style={carouselBox}>
                                <div className='carousel-content' style={carouselContent}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quo officiis blanditiis possimus laboriosam excepturi repellendus. Placeat corrupti illum neque.
                                </div>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={image3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className="carousel-box" style={carouselBox}>
                                <div className='carousel-content' style={carouselContent}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quo officiis blanditiis possimus laboriosam excepturi repellendus. Placeat corrupti illum neque.
                                </div>
                            </div>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
