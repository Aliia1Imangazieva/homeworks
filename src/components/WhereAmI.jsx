import React from "react";

const WhereAmI = () => {
    // Функция обработки клика
    const handleMouseClick = (event) => {
        // Получение позиции мыши из объекта события
        const mousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
        console.log("Mouse position:", mousePosition);
    };

    return (
        <div>
            <button onClick={handleMouseClick} style={{ padding: "20px 40px", cursor: "pointer", color:"green", margin:"160px", }}>
                whereAmI
            </button>
        </div>
    );
};

export default WhereAmI;