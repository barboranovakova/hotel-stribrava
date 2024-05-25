import { useState } from 'react';
import './style.css';
export const Room = ({ id, img, name, price, onSelect }) => {
  return (
    <div onClick={() => onSelect(id)} className="card">
      <img className="card__image" src={img} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price}</div>
    </div>
  );
};
