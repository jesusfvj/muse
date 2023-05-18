export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const isEqual = (obj1, obj2) => {
  return obj1._id === obj2._id;
};

export const findIndexOfObject = (array, targetObject) => {
  return array.findIndex((obj) => isEqual(obj, targetObject));
};

