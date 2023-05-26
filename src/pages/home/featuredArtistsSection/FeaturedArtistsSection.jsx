import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function FeaturedArtistsSection() {
    return (
        <section>
            <div className="containerBig featuredArtistsSection">
                <div className="heading">
                    <h3>Our Featured Artists</h3>
                    <p>Choose from the best so that you can never go wrong.
                    </p>
                    <a href="#"><span>Explore more</span> <span><ArrowRightAltIcon /></span></a>
                </div>
                {/* --cards-- */}
                <div className="cardContainer">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={2}
                        breakpoints={{
                            568: {
                                slidesPerView: 2,

                            },
                            700: {
                                slidesPerView: 3,

                            },
                            1200: {
                                slidesPerView: 4,

                            },
                            1600: {
                                slidesPerView: 5,

                            },
                        }}
                        className="featuredArtistsCards"
                    >


                        <SwiperSlide className='slide'>
                            <div className="card">
                                <LazyLoadImage src='https://picsum.photos/seed/picsum/200/300' alt='artist' className='artistImg' />
                                <div className="artistDetail">
                                    <p className="name">artist"name asd</p>
                                    <div className="rating">
                                        <Rating
                                            name="text-feedback"
                                            value={1}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, color: "lightgray" }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="card">
                                <LazyLoadImage src='https://picsum.photos/seed/picsum/200/300' alt='artist' className='artistImg' />
                                <div className="artistDetail">
                                    <p className="name">artist"name asd</p>
                                    <div className="rating">
                                        <Rating
                                            name="text-feedback"
                                            value={1}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, color: "lightgray" }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="card">
                                <LazyLoadImage src='https://picsum.photos/seed/picsum/200/300' alt='artist' className='artistImg' />
                                <div className="artistDetail">
                                    <p className="name">artist"name asd</p>
                                    <div className="rating">
                                        <Rating
                                            name="text-feedback"
                                            value={1}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, color: "lightgray" }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="card">
                                <LazyLoadImage src='https://picsum.photos/seed/picsum/200/300' alt='artist' className='artistImg' />
                                <div className="artistDetail">
                                    <p className="name">artist"name asd</p>
                                    <div className="rating">
                                        <Rating
                                            name="text-feedback"
                                            value={1}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, color: "lightgray" }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="card">
                                <LazyLoadImage src='https://picsum.photos/seed/picsum/200/300' alt='artist' className='artistImg' />
                                <div className="artistDetail">
                                    <p className="name">artist"name asd</p>
                                    <div className="rating">
                                        <Rating
                                            name="text-feedback"
                                            value={1}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, color: "lightgray" }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <div className="card">
                                <LazyLoadImage src='https://picsum.photos/seed/picsum/200/300' alt='artist' className='artistImg' />
                                <div className="artistDetail">
                                    <p className="name">artist"name asd</p>
                                    <div className="rating">
                                        <Rating
                                            name="text-feedback"
                                            value={1}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55, color: "lightgray" }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
                {/* --//cards-- */}
            </div>
        </section>
    )
}
