import './style.css';
import React from 'react';

export const Footer = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p>Hotel Střibrava</p>
          <p>Ke Kamenné lávce 12</p>
          <p>317 24 Libnice nad Sázavou</p>
          <p>recepce@hotelstribrava.cz</p>
        </div>
        <img src="./img/mapa.png" />
      </div>
    </section>
  );
};
