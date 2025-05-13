export async function fetchAllBreeds() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const { message } = await res.json();
    return Object.keys(message);
  }
  
  export async function fetchBreedImage(breed) {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const { message } = await res.json();
    return message;
  }
  