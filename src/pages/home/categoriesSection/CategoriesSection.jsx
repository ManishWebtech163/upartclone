import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function CategoriesSection() {
    return (
        <section>
            <div className='containerBig categoriesSection'>
                <h3 className='heading'>Our Categories</h3>
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
                    className="categoriesCards"
                >
                    <SwiperSlide className='slide'>
                        <div className="card">
                            <LazyLoadImage src='./images/homePage/cateogories/makeUp.svg' alt='artist' />
                            <p className="title">make</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='slide'>
                        <div className="card">
                            <LazyLoadImage src='./images/homePage/cateogories/makeUp.svg' alt='artist' />
                            <p className="title">make</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='slide'>
                        <div className="card">
                            <LazyLoadImage src='./images/homePage/cateogories/makeUp.svg' alt='artist' />
                            <p className="title">make</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='slide'>
                        <div className="card">
                            <LazyLoadImage src='./images/homePage/cateogories/makeUp.svg' alt='artist' />
                            <p className="title">make</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='slide'>
                        <div className="card">
                            <LazyLoadImage src='./images/homePage/cateogories/makeUp.svg' alt='artist' />
                            <p className="title">make</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}
