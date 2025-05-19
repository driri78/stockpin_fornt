function numberFomat(number) {
  return number.toLocaleString("ko-KR");
}

function chgRateFomat(number) {
  let rate = Math.floor(number * 10) / 10;
  return number > 0 ? `+${rate}` : rate;
}

function upDownNumber(number) {
  return number == 0 ? "" : number > 0 ? "up" : "down";
}

export { numberFomat, chgRateFomat, upDownNumber };
