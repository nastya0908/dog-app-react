import React from 'react';
import { BreedsProvider } from './context/BreedsContext';
import Header from './components/Header';
import BreedList from './components/BreedList';
import BreedDetail from './components/BreedDetail';
import Footer from './components/Footer';

export default function App() {
  return (
    <BreedsProvider>
      <Header />
      <main className="main-container">
        <BreedList />
        <BreedDetail />
      </main>
      <Footer />
    </BreedsProvider>
  );
}
