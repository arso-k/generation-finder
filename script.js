function identifyGeneration() {
  var birthYear = document.getElementById("birthYear").value;
  var generation = "";

  if (birthYear >= 1901 && birthYear <= 1924) {
    generation = "The Greatest Generation";
  } else if (birthYear >= 1925 && birthYear <= 1945) {
    generation = "The Silent Generation";
  } else if (birthYear >= 1946 && birthYear <= 1964) {
    generation = "The Baby Boomer Generation";
  } else if (birthYear >= 1965 && birthYear <= 1979) {
    generation = "Generation X";
  } else if (birthYear >= 1980 && birthYear <= 1994) {
    generation = "Millennials";
  } else if (birthYear >= 1995 && birthYear <= 2012) {
    generation = "Generation Z";
  } else if (birthYear >= 2013 && birthYear <= 2025) {
    generation = "Gen Alpha";
  } else {
    generation = "Unknown";
  }

  document.getElementById("result").innerText = "You belong to: " + generation;
}
