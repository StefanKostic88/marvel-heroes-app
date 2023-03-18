const API_KEY = "eb5dbae24a4e3ca8983252245373f194";

const getAllCharacters = async () => {
  const res = await fetch(
    `http://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}`
  );
  const data = await res.json();
  console.log(data);
};

// getAllCharacters();
