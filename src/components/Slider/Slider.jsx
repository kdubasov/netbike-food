import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './Slider.css';
import './SliderMedia.css';

const Slider = () => {

    const sliderData = [
        {
            id:1,
            img:"/images/Slider/slide1.svg",
            text:"Айдентика наших клиентов"
        },
        {
            id:2,
            img:"/images/Slider/slide1.svg",
            text:"Айдентика наших клиентов"
        },
        {
            id:3,
            img:"/images/Slider/slide1.svg",
            text:"Айдентика наших клиентов"
        },
    ];

    return (
        <div className={`Slider`}>
            <Swiper navigation={true} modules={[Navigation]}>
                {
                    sliderData.map(elem =>(
                        <SwiperSlide
                            key={elem.id}
                            style={{backgroundImage:`url(${elem.img})`}}
                        >
                            <h3>{elem.text}</h3>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;