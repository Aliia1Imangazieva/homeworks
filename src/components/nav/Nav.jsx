import { useState } from 'react';
import cl from "./Nav.module.scss"

import cheeseburgerImg from './img/cheeseburger.png';
import comboImg from './img/combo.png';
import donerImg from './img/doner.png';
import hotDogsImg from './img/hot-dogs.png';
import snacksImg from './img/snacks.png';
import pizzaImg from './img/pizza.png';
import wokImg from './img/wok.png';
import soucesImg from './img/souces.png';
import desertsImg from './img/deserts.png';

import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
    const [activeId, setActiveId] = useState(null);

    const navData = [
        {
            id: 1,
            imgSrc: cheeseburgerImg,
            title: "Бургеры"
        },
        {
            id: 11,
            imgSrc: snacksImg,
            title: "Закуски"
        },
        {
            id: 21,
            imgSrc: hotDogsImg,
            title: "Хот-доги"
        },
        {
            id: 1211,
            imgSrc: comboImg,
            title: "Комбо"
        },
        {
            id: 111221,
            imgSrc: donerImg,
            title: "Шаурма"
        },
        {
            id: 312211,
            imgSrc: pizzaImg,
            title: "Пицца"
        },
        {
            id: 13112221,
            imgSrc: wokImg,
            title: "Вок"
        },
        {
            id: 1113213211,
            imgSrc: desertsImg,
            title: "Десерты"
        },
        {
            id: 31131211131221,
            imgSrc: soucesImg,
            title: "Соусы"
        }
    ]
    
    return (
        <div className={cl.wrapper}>
            <ul className={cl.nav} >
                {navData.map((item) => {
                    return (
                        <li
                            className={`${cl.navLi} ${activeId === item.id ? cl.active : ''}`}
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                        >
                            <img className={cl.iconImg} src={item.imgSrc} alt="icon"/>
                            <span>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>

    );
}

export default Nav
