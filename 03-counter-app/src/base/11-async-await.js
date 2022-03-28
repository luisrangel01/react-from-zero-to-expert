
export const getImagen = async () => {
  try {
    const apiKey = 'dUaEpCHLvbS1VDigGQT0Zp6ge5yepPT5';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append(img);

    return url;
  } catch (err) {
    // manejo del error
    console.error(err);
    // return err;
    return 'No existe';
  }
};
