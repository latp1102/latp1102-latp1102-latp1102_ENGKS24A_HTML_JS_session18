let year = prompt("Nhập năm");
let isLeapYear = false;
let checkYear = year % 4 == 0;

if (checkYear) {
    let checkYear1 = year % 100 == 0;
    if (checkYear1) {
        let checkYear2 = year % 400 == 0;
        if  (checkYear2) {
            isLeapYear = true;;
        }
    } else {
        isLeapYear = true;
    }
}
if (isLeapYear) {
    document.write("Năm nhuận");
} else {
    document.write("Năm không nhuận");
}