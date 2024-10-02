function divCon(x){
  let f = x.filter((a, b) => {
    return typeof a === "string";
  })
  let red = f.reduce((prev, curr) => {
    return (Number(prev) || 0) + (Number(curr) || 0);
  }, 0)
  let c = x.filter((a, b) => {
    return typeof a === "number";
  })
  let res = c.reduce((prev, curr) => {
    return (Number(prev) || 0) + (Number(curr) || 0);
  }, 0)

  if (res === 0) {
    return -red;
  } else {
    return res - red
  }
}