/**
 * khối 1: Input (dữ liệu đầu vào)
 * + chiều dài 10 m
 * + chiều rộng 5 m
 * 
 * khối 2: các bước xử lý
 * B1: tạo biến và gắn giá trị khởi tạo
 * + chieuDai
 * + chieuRong
 * + chuVi
 * + dienTich
 * 
 * B2: xây dựng công thức tính toán
 * chuVi = (chieuDai + chieuRong) * 2
 * dienTich = chieuDai * chieuRong
 * 
 * B3: hiển thị kết quả (console.log)
 *  
 * khối 3: Output (kết quả)
 * + Chu vi HCN (chuVi)
 * + Diện tích HCN (dienTich)
 */

// B1
var chieuDai = 10;
var chieuRong = 5;
var chuVi = 0;
var dienTich = 0;

// B2
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

// B3
console.log("Chu vi HCN: " + chuVi + " m" + "\n" + "Diện tích HCN: " + dienTich + " m²")