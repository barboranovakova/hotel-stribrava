import dayjs from 'dayjs';
import { useState } from 'react';

export const Form = ({ roomName, description, img, id, price }) => {
  const [pocetOsob, setPocetOsob] = useState(1);
  const [pocatecniDatum, setPocatecniDatum] = useState(new Date());
  const [zaverecnyDatum, setZaverecnyDatum] = useState(new Date());
  //const [celkovaCena, setCelkovaCena] = useState(0);
  const handlePocetOsob = (e) => {
    setPocetOsob(e.target.value);
  };
  const date1 = dayjs(pocatecniDatum);
  const date2 = dayjs(zaverecnyDatum);
  const pocetDni = date2.diff(date1, 'day');
  console.log(pocatecniDatum, zaverecnyDatum);

  const celkovaCena = pocetOsob * price * pocetDni;
  return (
    <section className="light">
      <div className="container">
        <h2>{`Pokoj ${roomName},${price} kč na osobu za noc`}</h2>
        <div className="columns-2">
          <div className="column">
            <img src={'http://localhost:4000/assets/' + img} />
            <p> {description}</p>
          </div>
          <form>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input
                value={pocatecniDatum}
                id="field1"
                className="field-input"
                type="date"
                onChange={(e) => setPocatecniDatum(e.target.value)}
              />

              <label htmlFor="field2" className="field-label">
                Do:
              </label>
              <input
                value={zaverecnyDatum}
                id="field2"
                className="field-input"
                type="date"
                onChange={(e) => setZaverecnyDatum(e.target.value)}
              />
              <label htmlFor="field3" className="field-label">
                Počet osob:
              </label>
              <input
                value={pocetOsob}
                onChange={handlePocetOsob}
                id="field3"
                className="field-input"
                type="number"
              />

              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select id="select" className="field-input">
                <option>Polopenzi</option>
                <option>Plnapenzi</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Domácí mazlíček:
              </label>
              <input id="mazlicek" className="field-input" type="checkbox" />
              <label htmlFor="check1" className="field-label">
                Pryštylka pro dítě:
              </label>
              <input id="pryštylka" className="field-input" type="checkbox" />
              <label htmlFor="check1" className="field-label">
                Bezbariérový přístup:
              </label>
              <input id="pristup" className="field-input" type="checkbox" />
              <label htmlFor="field2" className="field-label">
                E-mail:
              </label>
              <input id="email" className="field-input" type="text" />
              <label htmlFor="field2" className="field-label">
                Telefon:
              </label>
              <input id="telefon" className="field-input" type="text" />
            </div>
            <h2>Celkova cena: {celkovaCena}</h2>
            <button className="wide">Odeslat poptávku</button>
          </form>
        </div>
      </div>
    </section>
  );
};
