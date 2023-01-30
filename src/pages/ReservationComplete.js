import React from "react";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import chef from '../assets/Chef Training.png'

export default function ReservationComplete() {
  return (
    <>
      <Main />
      <div
        style={{
          textAlign: "center",
          color: "rgba(73, 94, 87, 1)",
          height: "25vh",
          display: "flex",
        }}
      >
        <img src={chef} alt="" style={{objectFit:"cover"}} />
        <div>
          <h1>Thank you for Your reservation</h1>
          <p>your table number is {Math.floor(Math.random() * 101)}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
