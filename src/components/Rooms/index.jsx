import './style.css';
import { Room } from '../Room';
import { useEffect, useState } from 'react';

export const Rooms = ({ selectedRooms, onRoomSelect }) => {
  const [roomItems, setRoomItems] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/room');
      const data = await response.json();
      setRoomItems(data.data);
    };
    fetchItems();
  }, []);
  if (roomItems === null) {
    return;
  }

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {roomItems.map((pokoj) => (
            <Room
              key={pokoj.id}
              id={pokoj.id}
              name={pokoj.name}
              price={`${pokoj.price} kč na osobu`}
              img={`http://localhost:4000/assets/${pokoj.image}`}
              onSelect={onRoomSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
