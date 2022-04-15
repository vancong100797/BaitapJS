/**
 * khối 1: Input (dữ liệu đầu vào)
 * + cho ngẫu nhiên 1 số có 2 chữ số
 * vd: 17
 * 
 * khối 2: các bước xử lý
 * B1: tạo biến và gắn giá trị khởi tạo
 * + num (số có 2 chữ số)
 * + ten (hàng chục)
 * + unit (hàng đơn vị)
 * + sum (tổng 2 số cộng lại)
 * 
 * B2: xây dựng công thức tính toán
 * + lấy phần nguyên để được số hàng chục
 * ten = Math.floor(num / 10)
 * + lấy phần dư để được số hàng đơn vị
 * unit = num % 10;
 * + cộng số hàng chục và hàng đơn vị => tổng
 * sum = ten + unit
 * 
 * B3: hiển thị kết quả (console.log)
 *  
 * khối 3: Output (kết quả)
 * + Tổng (sum)
 * 
 */

// B1
var num = 17;
var ten = 0;
var unit = 0;
var sum = 0;

// B2
ten = Math.floor(num / 10);
unit = num % 10;
sum = ten + unit;

// B3
console.log("Hàng chục: " + ten + "\n" + "Hàng đơn vị: " + unit + "\n" + "Tổng: " + sum);




// làm thêm
var numBer = 1997;
var nghin = 0;
var tram = 0; 
var chuc = 0;
var donVi = 0;
var tong = 0;

nghin = Math.floor(numBer / 1000);
tram = Math.floor((numBer % 1000) / 100);
chuc = Math.floor(((numBer % 1000) % 100) / 10);
donVi = ((numBer % 1000) % 100) % 10;

tong = nghin + tram + chuc + donVi;

console.log("Hàng nghin: " + nghin + "\n" + "Hàng trăm: " + tram + "\n" + "Hàng chục: " + chuc + "\n" + "Hàng đơn vị: " + donVi + "\n" + "Tổng: " + tong)
