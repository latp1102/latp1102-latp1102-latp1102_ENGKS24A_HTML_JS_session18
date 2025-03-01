let a = +prompt("Nhập cạnh thứ nhất");
let b = +prompt("Nhập cạnh thứ hai");
let c = +prompt("Nhập cạnh thứ ba");

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
      document.write("Đều")
  } else if (a === b || b === c || a === c) {
      document.write("Cân")
  } else if (
      a * a + b * b === c * c ||
      a * a + c * c === b * b ||
      b * b + c * c === a * a
  ) {
      document.write("Vuông");
  }
} else {
  document.write("Tam giác thường")
}
