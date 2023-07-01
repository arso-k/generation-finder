function identifyGeneration() {
  var birthYear = document.getElementById('birthYear').value;
  var generation = '';

  switch (true) {
    case birthYear >= 1901 && birthYear <= 1924:
      generation = 'The Greatest Generation';
      break;
    case birthYear >= 1925 && birthYear <= 1945:
      generation = 'The Silent Generation';
      break;
    case birthYear >= 1946 && birthYear <= 1964:
      generation = 'The Baby Boomer Generation';
      break;
    case birthYear >= 1965 && birthYear <= 1979:
      generation = 'Generation X';
      break;
    case birthYear >= 1980 && birthYear <= 1994:
      generation = 'Millennials';
      break;
    case birthYear >= 1995 && birthYear <= 2012:
      generation = 'Generation Z';
      break;
    case birthYear >= 2013 && birthYear <= 2025:
      generation = 'Gen Alpha';
      break;
    default:
      generation = 'Unknown';
  }

  document.getElementById('result').innerText = 'You belong to: ' + generation;
}
