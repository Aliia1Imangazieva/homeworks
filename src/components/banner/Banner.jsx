import React, { useState, useEffect } from 'react';
import './banner.scss';
import burger from './img.banner/burger.jpg';
import fries from './img.banner/fries.png';
import logo from './img.banner/logo.png';
import bg from './img.banner/bg.png';



const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            image: burger,
            title: 'Только самые',
            highlight: 'сочные бургеры!',
            offer: 'Бесплатная доставка от 599₽',
        },
        {
            image: fries,
            title: 'Идеальный перекус',
            highlight: 'всегда под рукой!',
            offer: 'Скидка 20% на первый заказ',
        },
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setIsAnimating(false);
            }, 1000);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <div className="new_banner">
            <img src={bg} alt="bg" className='bg' />
            <div className="logo">
                <img src={logo} alt="logo" className='logo_img' />
            </div>
            <div className="banner_img">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.image}
                        alt="Food"
                        className={`burger_img ${index === currentIndex ? (isAnimating ? 'exit-left' : 'show') : 'hide'}`}
                    />
                ))}
            </div>
            <div className="content">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`text_content ${index === currentIndex ? (isAnimating ? 'exit-right' : 'show') : 'hide'}`}
                    >
                        <h1 className="title">
                            {slide.title}<br />
                            <span className="highlight">{slide.highlight}</span>
                        </h1>
                        <p className="offer">{slide.offer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
