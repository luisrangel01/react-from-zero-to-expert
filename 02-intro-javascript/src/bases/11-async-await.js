console.log('Hello World!!!');

const getImagenPromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve('https://fdgdfgdffg.com');
  });

  return promesa;
};

getImagenPromesa().then(console.log);

const getImagen = async () => {
  return 'https://fdgdfgdffg.com';
};

getImagen().then(console.log);

const getImagen2 = async () => {
  try {
    const apiKey = 'dUaEpCHLvbS1VDigGQT0Zp6ge5yepPT5';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');

    img.src = url;

    document.body.append(img);
  } catch (err) {
    console.error(err);
  }
};

getImagen2();
