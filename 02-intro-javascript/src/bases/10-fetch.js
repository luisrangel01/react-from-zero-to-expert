console.log('Hello World!!!');

const apiKey = 'dUaEpCHLvbS1VDigGQT0Zp6ge5yepPT5';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// httpCall
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promesas en cadena
httpCall
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch((err) => {
    console.error(err);
  });
