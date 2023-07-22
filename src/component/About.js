import React from 'react'
import '../component/css/About.css'

export default function About() {
    return (

        <div className='about-background'>
            <div className='abou-content'>
                <div className='first-about'>
                    <h1>about</h1>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dicta doloribus ad recusandae, totam eveniet earum quas necessitatibus reiciendis dolore consequatur, quo, similique cupiditate veritatis unde harum accusamus velit sequi!</p>
                    </div>
                </div>
                <div className='Boxes-about'>
                    <div className="aboutcard">
                        <h2>heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia minima similique fugit molestias ratione natus quos dolores minus voluptate consequuntur!</p>
                    </div>
                </div>
                <div className='Boxes-about'>
                    <div className="aboutcard">
                        <h2>heading</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia minima similique fugit molestias ratione natus quos dolores minus voluptate consequuntur!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
