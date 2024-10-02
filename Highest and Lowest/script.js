function highAndLow(numbers){
  let a = numbers.split(' ');

  return Math.max.apply(null, a) + " " + Math.min.apply(null, a);
}