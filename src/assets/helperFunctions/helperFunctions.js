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
