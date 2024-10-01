function isPythagoreanTriple(integers) {
  integers.sort((a,b) => a - b);
  
for (let i = 0; i < integers.length; i++) {
  let op = Math.sqrt(Math.pow(integers[i], 2) + Math.pow(integers[i + 1], 2));
  if (op == integers[i + 2]) return true
}
  return false;
}