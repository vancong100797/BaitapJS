/**
 * Khối 1: Input (dữ liệu đầu vào)
 * + num
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * 
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Kiểm tra
 *          sum = ten + unit;
 * 
 * B3: Gắn hàm vào sự kiện click
 *  
 * Khối 3: Output (kết quả)
 * + Tổng (sum)
 */

var inpSo = document.getElementById("inputSo");

function tinhTong() {
    num = inpSo.value;

    var ten = Math.floor(Number(num) / 10);
    var unit = Number(num) % 10;
    var sum = Number(ten) + Number(unit);

    document.getElementById("tongHaiSo").innerHTML ="Tổng: " + sum;
}






// làm thêm
// var numBer = 1997;
// var nghin = 0;
// var tram = 0; 
// var chuc = 0;
// var donVi = 0;
// var tong = 0;

// nghin = Math.floor(numBer / 1000);
// tram = Math.floor((numBer % 1000) / 100);
// chuc = Math.floor(((numBer % 1000) % 100) / 10);
// donVi = ((numBer % 1000) % 100) % 10;

// tong = nghin + tram + chuc + donVi;

// console.log("Hàng nghin: " + nghin + "\n" + "Hàng trăm: " + tram + "\n" + "Hàng chục: " + chuc + "\n" + "Hàng đơn vị: " + donVi + "\n" + "Tổng: " + tong)
