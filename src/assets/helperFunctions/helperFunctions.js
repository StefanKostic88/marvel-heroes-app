const API_KEY = "eb5dbae24a4e3ca8983252245373f194";

export const getAllCharacters = async () => {
  const res = await fetch(
    `http://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}`
  );
  const {
    data: { results },
  } = await res.json();
  // console.log(results);
  const newData = results.map((el) => generateData(el));

  return newData;
};

export const getFilteredHeroesData = async (searchTearm) => {
  console.log(searchTearm);
  if (!searchTearm) return;

  const res = await fetch(
    `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchTearm}&apikey=${API_KEY}`
  );
  const {
    data: { results },
  } = await res.json();
  const newData = results.map((el) => generateData(el));
  return newData;
};

export const getSingleCharacter = async (charId) => {
  const res = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters/${charId}?apikey=eb5dbae24a4e3ca8983252245373f194`
  );
  const {
    data: { results },
  } = await res.json();

  const {
    name,
    description,
    thumbnail: { path, extension },
    id,
  } = results[0];

  return {
    name,
    description,
    img: `${path}.${extension}`,
    id,
  };
};

const generateData = ({
  name,
  id,
  thumbnail: { path, extension },
  // collectionURL,
  urls,
}) => ({
  name,
  id,
  img: `${path}.${extension}`,
  // collectionURL,
  urls,
});
