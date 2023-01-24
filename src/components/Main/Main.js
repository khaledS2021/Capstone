import React from "react";
import table from "../../assets/table reserved.png";
import "./main.css";

export default function Main() {
  return (
    <main>
      <section>
        <article>
          <h2>Little Lemon</h2>
          <p>
            recipes served with a modern twist. We are a family owned
            Mediterranean restaurant, focused on traditional
          </p>
        </article>
        <div className="image">
          <img src={table} alt="" />
        </div>
      </section>
    </main>
  );
}
