function isPowerOfTwo(n){
  if (n < 1) {
    return false;
  }
  
  while(n >= 2) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}