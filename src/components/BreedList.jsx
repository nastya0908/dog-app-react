import React, { useContext } from 'react';
import { BreedsContext } from '../context/BreedsContext';
import Loader from './Loader';

export default function BreedList() {
  const { breeds, setSelected } = useContext(BreedsContext);

  if (!breeds.length) return <Loader />;

  return (
    <section className="list-section">
      <h2 className="section-title">Породы собак</h2>
      <ul className="breed-list">
        {breeds.map(breed => (
          <li
            key={breed}
            className="breed-item"
            onClick={() => setSelected(breed)}
          >
            {breed}
          </li>
        ))}
      </ul>
    </section>
  );
}
