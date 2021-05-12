function compareCities(a, b) {
  // Use toUpperCase() to ignore character casing
  const cityA = a.city.toUpperCase();
  const cityB = b.city.toUpperCase();

  let comparison = 0;
  if (cityA > cityB) {
    comparison = 1;
  } else if (cityA < cityB) {
    comparison = -1;
  }
  return comparison;
}

function comparePlaces(a, b) {
  // Use toUpperCase() to ignore character casing
  const cityA = a.place.toUpperCase();
  const cityB = b.place.toUpperCase();

  let comparison = 0;
  if (cityA > cityB) {
    comparison = 1;
  } else if (cityA < cityB) {
    comparison = -1;
  }
  return comparison;
}