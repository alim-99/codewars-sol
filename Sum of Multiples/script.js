function sumMul(n,m){
  let sum = 0;
  if (n <= 0 || m <= 0) { 
    return "INVALID";
  } else {
    for (let i = 0; i < m; i+=n) {
      sum += i;
    }
    return sum
  }
}