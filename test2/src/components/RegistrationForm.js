import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password, confirmPassword } = form;
        if (!username || !password || !confirmPassword) {
            setError("Все поля должны быть заполнены.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Пароли не совпадают.");
            return;
        }

        if (users.some((user) => user.username === username)) {
            setError("Пользователь с таким именем уже зарегистрирован.");
            return;
        }

        setUsers((prevUsers) => [...prevUsers, { username, password }]);
        setForm({ username: "", password: "", confirmPassword: "" });
        setError("Регистрация прошла успешно!");
    };

    return (
        <div className="form-container">
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>Имя пользователя:</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Пароль:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Подтвердите пароль:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="form-button">
                    Зарегистрироваться
                </button>
            </form>
            {error && (
                <p className={`form-message ${error === "Регистрация прошла успешно!" ? "success" : "error"}`}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default RegistrationForm;
