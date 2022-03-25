console.clear();

const complexArray = [300, 1, [8, 9, 12], 2, ['a', 'b', 'd', [66, 52]], 3, 4, 5, [442]];

console.log('originArray', complexArray, `length: ${complexArray.length}`);

const flatArray = (originArray) => {
  const newArray = [];
  originArray.forEach((element) => {
    if (Array.isArray(element)) {
      newArray.push(...flatArray(element));
      // newArray.push.apply(newArray, flatArray(element));
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

const flat = flatArray(complexArray);
console.log('Array Flat', flat, `length: ${flat.length}`);
