import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isLoading }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        console.log("Click handleSubmit");
    };
  
    return isLoading ? (
        <p>Loadding....</p>
    ) : (
        <div className="login">
            <h2>Se connecter</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <input
                onChange={(event) => {
                    setEmail(event.target.value);
                    setErrorMessage("");
                }}
                placeholder="Adresse email"
                type="email"
                />
                <br/>
                <input
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                placeholder="Mot de passe"
                type="password"
                />
                <br/>
                <span className="signup-login-error-message">{errorMessage}</span>
                <br/>
                <button type="submit">Se connecter</button>
               
            </form>
            
        </div>
    );
  };
  
export default Login;