/**
 * khối 1: Input (dữ liệu đầu vào)
 * + có 1000 USD
 * + 1 USD = 23500 VND
 * 
 * khối 2: các bước xử lý
 * B1: tạo biến và gắn giá trị khởi tạo
 * + uSD
 * + vND
 * + tienQuyDoi
 * 
 * B2: xây dựng công thức tính toán
 * tienQuyDoi = uSD * vND
 * 
 * B3: hiển thị kết quả (console.log)
 *  
 * khối 3: Output (kết quả)
 * + Tiền đổi từ USD sang VND (tienQuyDoi)
 * 
 */

// B1
var uSD = 1000;
var vND = 23500;
var tienQuyDoi = 0;

// B2
tienQuyDoi = uSD * vND;

// B3
console.log("Tiền đổi từ USD sang VND: " + tienQuyDoi.toLocaleString() + " VND")