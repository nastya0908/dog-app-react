import React, { createContext, useState, useEffect } from 'react';
import { fetchAllBreeds } from '../hooks/useBreeds';

export const BreedsContext = createContext();

export function BreedsProvider({ children }) {
  const [breeds, setBreeds] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchAllBreeds().then(setBreeds);
  }, []);

  return (
    <BreedsContext.Provider value={{ breeds, selected, setSelected }}>
      {children}
    </BreedsContext.Provider>
  );
}
