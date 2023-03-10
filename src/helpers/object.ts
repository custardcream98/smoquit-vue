const randomlySelectInArray = <T>(array: T[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomlySelectInReadonlyArray = <T>(array: readonly T[]) => {
  return randomlySelectInArray(array as T[]);
};

export { randomlySelectInArray, randomlySelectInReadonlyArray };
