let year = prompt("Nhập số năm");

if (year > 6)   {
    document.write( 'Quản lý');
} else if (year >= 4 && year <= 6) {
    document.write(' Chuyên viên');
} else if (year >= 1 && year <= 3) {
    document.write(' Nhân viên kinh nghiệm');
} else {
    document.write(' Mới vào nghề');
}