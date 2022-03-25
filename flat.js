console.clear();

const complexArray = [300, 1, [8, 9, 12], 2, ['a', 'b', 'd', [66, 52]], 3, 4, 5, [442]];

console.log('originArray', complexArray);

const flatArray = (originArray) => {
  const newArray = [];
  originArray.forEach((element) => {
    if (Array.isArray(element)) {
      newArray.push.apply(newArray, flatArray(element));
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log('Array Flat', flatArray(complexArray));
