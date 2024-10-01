function integrate(coefficient, exponent) {
  let number = exponent + 1;
  return `${coefficient / number}x^${number}`;
}