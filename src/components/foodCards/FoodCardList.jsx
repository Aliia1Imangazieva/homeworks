import React from 'react';
import FoodCard from './FoodCard';
import img from './img/photo.png';
import './foodCardList.scss'


const FoodCardList = () => {
    const items = [
        { 
            id: 1,
            img: img,
            title: "Item One",
            price: 689,
            weight: "520"
        },
        { 
            img: img,
            id: 2,
            title: "Item Two",
            price: 750,
            weight: "600"
        },
        { 
            id: 3,
            title: "Item Three",
            img: img,
            price: 499,
            weight: "450"
        },
        { 
            id: 4,
            title: "Item Four",
            img: img,
            price: 850,
            weight: "700"
        },
        { 
            id: 5,
            title: "Item Five",
            img: img,
            price: 999,
            weight: "800"
        },
        { 
            id: 6,
            title: "Item Six",
            img: img,
            price: 300,
            weight: "300"
        },
    ];
    
    return (
        <div className='container'>
            <h1>Бургеры</h1>
            <div className='list'>
                {items.map((card) => (
                    <FoodCard 
                    id={card.id} 
                    price={card.price}
                    title={card.title} 
                    img={card.img} 
                    weight={card.weight} 
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodCardList;