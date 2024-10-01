function descendingOrder(n){
  let sorted = n.toString().split('').sort((a,b) => b - a).map(Number);
  
  return Number(sorted.join(''))
}