let maths = +prompt("Nhập điểm toán");
let literature = +prompt("Nhập điểm văn");
let english = +prompt("Nhập điểm anh");

let avg = (maths + literature + english) / 3;
document.write( avg);

if (avg >= 8){
    document.write(" Giỏi");
} else if (avg >= 6.5 && avg <= 7.9){
    document.write(" Khá");
} else if (avg >= 5 && avg <= 6.4){
    document.write(" Trung bình");
} else {
    document.write(" Yếu");
}

