function shortenToDate(longDate) {
  let arr = longDate.split("").slice(0, 12);
  return longDate.split(",")[0]
}