/**
 * Khối 1: Input (dữ liệu đầu vào)
 * + soNgay, luongNgay
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * 
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Kiểm tra
 *          tongLuong = soNgay * luongNgay;
 * 
 * B3: Gắn hàm vào sự kiện click
 *  
 * Khối 3: Output (kết quả)
 * + Tổng lương (tongLuong)
 */

//  .toLocaleString() : hiển thị dấu chia ","

var inpSoNgay = document.getElementById("inputSoNgay");
var inpLuongNgay = document.getElementById("inputLuongNgay");
var tongLuong = 0;

function tinhLuong() {
    var soNgay = inpSoNgay.value;
    var luongNgay = inpLuongNgay.value;

    tongLuong = Number(soNgay) * Number(luongNgay);

    document.getElementById("thongBaoTien").innerHTML ="Tổng lương: " + tongLuong.toLocaleString() + " VND";
}







