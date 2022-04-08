export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=dUaEpCHLvbS1VDigGQT0Zp6ge5yepPT5`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const images = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  console.log(images);
  return images;
};
