import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import "./Placeorder.css";

export default function Placeorder() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 1500);
    }, []);

    if(redirect) {
        return <Navigate to="/"/>
    }

  return (
    <div id="placeholer-container">
        <h1 id="placeorder-h1">Your order is completed!</h1>
        <p id="placeorder-h3">You will be receiving a confirmation email with order details.</p>
    </div>
  )
}
