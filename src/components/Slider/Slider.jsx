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
            text:"Айдентика наших клиентов",
            color:'dark',
        },
        {
            id:2,
            img:"/images/Slider/slide2.svg",
            text:"Айдентика наших клиентов",
            color:'light',
        },
        {
            id:3,
            img:"/images/Slider/slide3.svg",
            text:"Айдентика наших клиентов",
            color:'light',
        },
        {
            id:4,
            img:"/images/Slider/slide4.svg",
            text:"Айдентика наших клиентов",
            color:'dark',
        },
        {
            id:5,
            img:"/images/Slider/slide5.svg",
            text:"Айдентика наших клиентов",
            color:'dark',
        },
        {
            id:6,
            img:"/images/Slider/slide6.svg",
            text:"Айдентика наших клиентов",
            color:'dark',
        },
        {
            id:7,
            img:"/images/Slider/slide7.svg",
            text:"Айдентика наших клиентов",
            color:'dark',
        },
        {
            id:8,
            img:"/images/Slider/slide8.svg",
            text:"Айдентика наших клиентов",
            color:'light',
        },
        {
            id:9,
            img:"/images/Slider/slide9.svg",
            text:"Айдентика наших клиентов",
            color:'dark',
        },
        {
            id:10,
            img:"/images/Slider/slide10.svg",
            text:"Айдентика наших клиентов",
            color:'dark',
        },
        {
            id:11,
            img:"/images/Slider/slide11.svg",
            text:"Айдентика наших клиентов",
            color:'dark',
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
                            <h3 style={elem.color==='light'?{color:"white"}:{}}>{elem.text}</h3>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;