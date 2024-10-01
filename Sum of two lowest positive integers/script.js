function sumTwoSmallestNumbers(numbers) {
  let positveNumbers = numbers.filter(nums => nums > 0);
  let postiveSort = positveNumbers.sort((a,b) => a - b);
  let sum = postiveSort[0] + postiveSort[1];
  return sum
}