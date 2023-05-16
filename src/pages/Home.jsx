import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ isLoading }) => {
    
    const navigate = useNavigate();
  
    return isLoading ? (
        <p>Loadding....</p>
    ) : (
        <div className="home">
            <button
              onClick={() => {
                navigate("/login");
              }}
            >Login</button>
        </div>
    );
  };
  
  export default Home;
  
