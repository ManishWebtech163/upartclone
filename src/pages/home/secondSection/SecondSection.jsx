import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '../../../components/Button';
import GradientButton from '../../../components/gradientButton';

export default function SecondSection() {
    return (
        <section>
            <div className="container containerBig secondSection">

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="cards"
                >
                    <SwiperSlide className='slide'>
                        <div className="card">
                            <p className="title">Find the perfect artist in a few minutes</p>
                            <p className="pera">No need to browse a hundred sites anymore. Have all the information and options in one place and <b> book the best artist within minutes!</b></p>
                            <GradientButton text="Hire Artists" action={() => console.log("hii")} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <div className="card">
                            <p className="title">Find the perfect artist in a few minutes</p>
                            <p className="pera">No need to browse a hundred sites anymore. Have all the information and options in one place and <b> book the best artist within minutes!</b></p>
                            <GradientButton text="Hire Artists" action={() => console.log("hii")} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <div className="card">
                            <p className="title">Find the perfect artist in a few minutes</p>
                            <p className="pera">No need to browse a hundred sites anymore. Have all the information and options in one place and <b> book the best artist within minutes!</b></p>
                            <GradientButton text="Hire Artists" action={() => console.log("hii")} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <div className="card">
                            <p className="title">Find the perfect artist in a few minutes</p>
                            <p className="pera">No need to browse a hundred sites anymore. Have all the information and options in one place and <b> book the best artist within minutes!</b></p>
                            <GradientButton text="Hire Artists" action={() => console.log("hii")} />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}
