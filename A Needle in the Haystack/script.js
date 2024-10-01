function findNeedle(haystack) {
  let index = haystack.indexOf("needle");
  return haystack.includes("needle") ? `found the needle at position ${index}` : null
}