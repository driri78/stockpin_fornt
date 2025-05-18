function numberFomat(number) {
  return number.toLocaleString("ko-KR");
}

function chgRateFomat(number) {
  return Math.floor(number * 10) / 10;
}

function upDownNumber(number) {
  return number == 0 ? "" : number > 0 ? "up" : "down";
}

export { numberFomat, chgRateFomat, upDownNumber };
