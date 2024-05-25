import './style.css';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <div className="banner">
        <div className="banner__stripe">
          <div className="container">
            <h1>Hotel Stříbrava</h1>
            <p className="lead">
              Rodinný hotel v malebné krajině českého středohoří.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
