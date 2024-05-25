import { Rooms } from '../../components/Rooms';
import './style.css';
import { Form } from '../../components/Form';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        'http://localhost:4000/api/room/' + selectedRoom,
      );
      const data = await response.json();
      setRoom(data.data);
    };
    if (selectedRoom) {
      fetchItems();
    }
  }, [selectedRoom]);

  const handleSelect = (selectRoom) => {
    console.log('pokoj', selectRoom);
    setSelectedRoom(selectRoom);
  };

  return (
    <>
      <Rooms selectedRoom={selectedRoom} onRoomSelect={handleSelect} />
      {room != null && (
        <Form
          roomName={room.name}
          description={room.description}
          img={room.image}
          price={room.price}
          id={room.id}
          key={room.key}
        />
      )}
    </>
  );
};
