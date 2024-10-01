function digitize(n) {
  let arr = String(n)
  let numArr = arr.split("")
  return numArr.map(Number).reverse();
} 