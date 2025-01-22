import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    // Обработка изменений в инпутах
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Проверка логина (регулярное выражение для email)
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Проверка пароля
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = formData;

        if (!isValidEmail(email)) {
            setError("Введите корректный email!");
            return;
        }

        if (password !== confirmPassword) {
            setError("Пароли не совпадают!");
            return;
        }

        setError(""); // Очищаем ошибки, если всё прошло успешно
        console.log("Данные формы:", formData);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "5px" }}>Подтвердите пароль:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
                        required
                    />
                </div>
                {error && <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>}
                <button type="submit" style={{ padding: "10px 15px", cursor: "pointer", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "4px" }}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;