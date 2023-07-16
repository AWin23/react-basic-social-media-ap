import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Profile() {
    let navigate = useNavigate(); // its a represneted function where once called, it navigates to the routes
    let { username } = useParams();

    const handleButtonClick = () => {
        navigate("/about"); // Navigate to the "/menu" route
    };

    return (
        <div>
           THIS IS THE PROFILE PAGE OF {username} 
            <button onClick={handleButtonClick}>
            {""}
            Change to about page</button>
        </div>
    );
}


