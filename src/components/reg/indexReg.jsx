import React, { useState } from "react";
import "./indexRegStyle.scss";
import axios from "axios";

const Body = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginMode, setLoginMode] = useState(true);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (loginMode) {
        response = await axios.post("http://10.71.5.42:8080/api/auth/signin/", {
          username,
          password,
        });
        setToken(response.data.accessToken);
        console.log(response.data.accessToken); // Сохраняем токен при успешной аутентификацииx
        // Обработка успешного входа в систему
      } else {
        response = await axios.post("http://10.71.5.42:8080/api/auth/signup/", {
          username,
          email,
          password,
          roles: ["user"],
        });
        console.log("Registration successful:", response.data);
      }
      // Сохранение токена авторизации в локальном хранилище и перенаправление на домашнюю страницу.aaaaaaaw
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">{loginMode ? "Вход" : "Регистрация"}</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {!loginMode && (
          <div>
            <label className="auth-label" htmlFor="email">
              Электронная почта:
            </label>
            <input
              className="auth-input"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        <label className="auth-label" htmlFor="username">
          Имя пользователя:
        </label>
        <input
          className="auth-input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="auth-label" htmlFor="password">
          Пароль:
        </label>
        <input
          className="auth-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="auth-error">{error}</p>}
        <button className="auth-button" type="submit">
          {loginMode ? "Войти" : "Зарегистрироваться"}
        </button>
        <p className="auth-link" onClick={() => setLoginMode(!loginMode)}>
          {loginMode ? "Зарегистрироваться" : "Войти"}
        </p>
      </form>
      {token && <p>Токен авторизации: {token}</p>}
    </div>
  );
};

export default Body;
