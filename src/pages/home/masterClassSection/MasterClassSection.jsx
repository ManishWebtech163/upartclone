import React, { useRef } from 'react'
import { useState } from 'react';

export default function MasterClassSection() {

    const [videoStatus, setvideoStatus] = useState(false)

    const videoRef = useRef()
    const videoPlay = () => {
        if (!videoStatus) videoRef.current.play()
    }

    return (
        <section className='masterClassSection'>
            <div className="containerBig masterClassContainer">
                <div className="boxes">
                    <div className="box videoBox">
                        <div className="video">
                            <span className="overlay" onClick={videoPlay}>
                                <img src="./images/homePage/videoOverlay.svg" alt="overlay image" className={!videoStatus && 'hide'} />
                            </span>
                            <video width="320" height="240" muted ref={videoRef}>
                                <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="box content">
                        <div className="items">
                            <p className="heading">
                                <span>Master Class</span>
                                <span className='coloredSpan'>by <br /> Artist name</span>
                            </p>
                            <p className="pera">
                                Learn the art from the artist himself.Join a community of artists and learn from the comfort of your home. Pursue your passion and become a professional yourself.
                            </p>
                            <a href="#">Explore more <span>&#8594;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
