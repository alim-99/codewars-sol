function convertHashToArray(hash){
  Object.keys(hash).sort();
  
  return  Object.entries(hash);
}