function formatNumber(number) {
  return number.toLocaleString("ko-KR");
}

function upDownNumber(number) {
  return number == 0 ? "" : number > 0 ? "up" : "down";
}

export { formatNumber, upDownNumber };
