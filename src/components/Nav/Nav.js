import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/tables">Reserve a Table</a>
        </li>
      </ul>
    </nav>
  );
}
