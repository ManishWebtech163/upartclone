import React from 'react'
import ImgComponent from '../../../components/ImgComponent'
import GradientButton from '../../../components/gradientButton'

export default function ArtistProfile() {
    return (
        <div className="artistProfileDiv">
            <div className="img">
                <ImgComponent src="https://picsum.photos/200/300" />
            </div>
            <div className="detials">
                <div className="info">


                    {/* -- */}
                    <div className="name">
                        <span>Artist’s Name</span>
                        <span className="icon"></span>
                    </div>
                    {/* -- */}
                    <div className="likeBtns">

                    </div>
                    {/* -- */}
                    <div className="proffesion">
                        <span className="icon"></span>
                        <span></span>
                    </div>
                    {/* -- */}
                    <div className="location">
                        <span className="icon"></span>
                        <span></span>
                    </div>
                    {/* -- */}
                    <div className="rating">
                        <span></span>
                        <span></span>
                    </div>
                    {/* -- */}
                    <div className="photosNum">

                    </div>
                    {/* -- */}
                    <div className="jobsNum">

                    </div>
                    {/* -- */}
                    <div className="price">
                        <span className="mainPrice"></span>
                        <span className="advancePrice"></span>
                    </div>
                </div>
                <div className="btns">
                    <GradientButton text="Book now" />
                </div>
            </div>
        </div>
    )
}
