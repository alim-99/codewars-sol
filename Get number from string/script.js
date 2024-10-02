function getNumberFromString(s) {
  let rge = /[0-9]/ig;
  let m =  s.match(rge);
  let j = m.join("");
  return +j
}