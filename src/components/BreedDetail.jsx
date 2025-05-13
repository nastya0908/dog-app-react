import React, { useContext, useEffect, useState } from 'react';
import { BreedsContext } from '../context/BreedsContext';
import { fetchBreedImage } from '../hooks/useBreeds';
import Loader from './Loader';

export default function BreedDetail() {
  const { selected } = useContext(BreedsContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (selected) {
      setImage(null);
      fetchBreedImage(selected).then(setImage);
    }
  }, [selected]);

  return (
    <section className="detail-section">
      <h2 className="section-title">Детали породы</h2>
      {selected ? (
        image ? (
          <>
            <h3>{selected}</h3>
            <img src={image} alt={selected} className="breed-image" />
          </>
        ) : (
          <Loader />
        )
      ) : (
        <p>Выберите породу слева</p>
      )}
    </section>
  );
}
