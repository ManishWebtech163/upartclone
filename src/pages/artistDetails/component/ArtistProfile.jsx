import React from 'react'
import ImgComponent from '../../../components/ImgComponent'
import GradientButton from '../../../components/gradientButton'
import VerifiedIcon from '@mui/icons-material/Verified';
import { Checkbox, IconButton, Rating } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
export default function ArtistProfile() {
    return (
        <div className="artistProfileDiv">
            <div className="profileImg">
                <ImgComponent src="https://picsum.photos/200/300" />
            </div>
            <div className="detials">
                <div className="info">
                    {/* -- */}
                    <div className="name">
                        <span>Artist’s Name</span>
                        <span className="icon"><VerifiedIcon /></span>
                    </div>
                    {/* -- */}
                    <div className="likeBtns">
                        <Checkbox icon={<FavoriteBorder />} color="secondary" checkedIcon={<Favorite />} />
                        <IconButton aria-label="share" size="large">
                            <ShareIcon />
                        </IconButton>
                    </div>
                    {/* -- */}
                    <div className="proffesion">
                        <span className="icon">
                            <img src="./icons/CelebrityIcon1.svg" alt="#" />
                        </span>
                        <span>
                            Celebrity
                        </span>
                    </div>
                    {/* -- */}
                    <div className="location">
                        <span className="icon">
                            <img src="./icons/LoactionIcon.svg" alt="#" />
                        </span>
                        <span>
                            New Delhi, India
                        </span>
                    </div>
                    {/* -- */}
                    <div className="rating">
                        <span>
                            <Rating name="read-only" value={4} readOnly />
                        </span>
                        <span>(12)</span>
                    </div>
                    {/* -- */}
                    <div className="photosNum">
                        20Photos
                    </div>
                    {/* -- */}
                    <div className="jobsNum">
                        7jobs
                    </div>
                    {/* -- */}
                    <div className="price">
                        <span className="mainPrice">$12,000</span>
                        <span className="advancePrice">                            ($50 advance booking)                        </span>
                    </div>
                </div>
                <div className="btns">
                    <GradientButton text="Book now" />
                    <button className='contactBtn'>Contact</button>
                </div>
            </div>
        </div>
    )
}
