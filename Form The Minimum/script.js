function minValue(values){
  let f =  values.filter((acc, val) => values.indexOf(acc) === val);
  let sor = f.sort((a, b) => a - b);
  
  return Number(sor.join(""))
}