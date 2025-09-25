import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log({ username, password });
  };

  return (
    <div className="login-page">
      {/* Vidéo de fond */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos.
      </video>

      <div className="login-card">
        <h1>Bienvenue</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="username">Nom d'utilisateur</label>
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="password">Mot de passe</label>
          </div>

          <button type="submit" className="login-button">
            SE CONNECTER
          </button>
        </form>

        <p className="forgot-text">
          <a href="#">Mot de passe oublié ?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;