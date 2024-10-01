function areYouPlayingBanjo(name) {
  if (name.startsWith("r")) {
      return `${name} plays banjo`;
  } else if (name.startsWith("R")) {
      return `${name} plays banjo`;
  } else {
      return `${name} does not play banjo`;
  }
};