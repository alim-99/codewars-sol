var filterString = function(value) {
  let v = value.split("").map(Number).filter((a,b) => !isNaN(a)).join("");

return Number(v)
}