import React, { useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "../../helper";
import "./bookingform.css";

export default function BookingForm() {
  let today = new Date();
  const [form, setForm] = useState({
    date: today,
    availableTimes: fetchAPI(today),
    guests: 1,
    occasion: "",
  });

  const handleDateChange = (e) => {
    let date = new Date(e.target.value);
    setForm({ ...form, date: date });
  };

  useEffect(() => {
    setForm({ ...form, availableTimes: fetchAPI(form.date) });
    console.log(form.availableTimes);
  }, [form.date]);

  const handleSubmit = (e) => {
    console.log(submitAPI(form));
    window.alert('reservation made, thank you')
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          maxWidth: "200px",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input required onChange={handleDateChange} type="date" id="res-date" />
        <label htmlFor="res-time">Choose time</label>
        <select required id="res-time ">
          {form.availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          onChange={(e) => setForm({ ...form, occasion: e.target.value })}
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button onClick={handleSubmit} id="subtn" type="submit">
          Make Your reservation
        </button>
      </form>
    </div>
  );
}
