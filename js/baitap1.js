/**
 * khối 1: Input (dữ liệu đầu vào)
 * + lương 1 ngày 100000 vnd
 * + số ngày làm 28 ngày
 * 
 * khối 2: các bước xử lý
 * B1: tạo biến và gắn giá trị khởi tạo
 * + soNgayLam
 * + luongNgay
 * + tongLuong
 * 
 * B2: xây dựng công thức tính toán
 * tongLuong = luongNgay + soNgayLam
 * 
 * B3: hiển thị kết quả (console.log)
 *  
 * khối 3: Output (kết quả)
 * + Tổng lương (tongLuong)
 * 
 */

//  .toLocaleString() : hiển thị dấu chia ","

// B1
var soNgayLam = 28;
var luongNgay = 100000;
var tongLuong = 0;

// B2
tongLuong = soNgayLam * luongNgay;

// B3
console.log("Tổng lương: " + tongLuong.toLocaleString() + " VND");




