function sortGiftCode(code){
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let sorting = code.split("").sort();
  return sorting.join("");
}