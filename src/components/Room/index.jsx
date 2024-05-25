import './style.css';
export const Room = ({ img, name, price }) => {
  return (
    <div className="card">
      <img className="card__image" src={img} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price}</div>
    </div>
  );
};
