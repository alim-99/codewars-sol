var cubeChecker = function(volume, side){
  let volumeOfCube = Math.pow(side, 3);
  if (volumeOfCube === volume && volume > 0 && side > 0) {
    return true;
  } else  {
    return false;
  }
};