import React from 'react';
import './footer.scss';
import logo from './img.footer/logo-2.png';
import vk from './img.footer/vk.png';
import telegram from './img.footer/telegram.png';
import call from './img.footer/Call.png';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_logo">
                <img src={logo} alt="" id="logo"/>
                <p>&copy; YouMeal, 2022</p>
                <p>Design: Anastasia Ilina</p>
            </div>

            <div className="footer_order">
                <p className="footer_order-title">Номер для заказа</p>
                <a href="tel:+79308333811" className="footer_order-phone">
                    <img src={call} alt="" />+7 (930) 833-38-11
                </a>
            </div>

            <div className="footer_social">
                <p className="footer_social-title">Мы в соцсетях</p>
                <div className="footer_social-icons">
                    <a href="#" className="footer_social-link">
                        <img src={vk} alt="" />
                    </a>
                    <a href="#" className="footer_social-link">
                        <img src={telegram} alt="" />
                    </a>
                </div>
            </div>


        </footer>
    );
};

export default Footer;