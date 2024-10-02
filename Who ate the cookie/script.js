function cookie(x){
  if (typeof x === "string" ) {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  } else if (typeof x === "boolean" || typeof x === "object") {
    return "Who ate the last cookie? It was the dog!";
  }
}