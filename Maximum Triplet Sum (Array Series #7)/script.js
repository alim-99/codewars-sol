function maxTriSum(numbers) {
  let filter = numbers.filter((a, b) => numbers.indexOf(a) === b);

  return [...filter].sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b);
};
