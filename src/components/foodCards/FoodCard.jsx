import React, { useContext, useState } from "react";
import "./foodCard.scss";
import { CartContext } from "./CartContext"; 
const FoodCard = (props) => {
    const { addToCart } = useContext(CartContext); 
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(props.id); 
        setIsAdded(true);
    };

    return (
        <div className="card">
            <img src={props.img} alt={props.title} />

            <div>
                <h2>{props.price} ₽</h2>
                <p>{props.title}</p>
                <p className="weight">{props.weight} г</p>
            </div>

            <div className="button_p">
                <button className='button' onClick={handleAddToCart}>
                    {isAdded ? "Добавлено" : "Добавить"}
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
