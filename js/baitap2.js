/**
 * Khối 1: Input (dữ liệu đầu vào)
 * + num(1, 2, 3, 4, 5,...)
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * 
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Kiểm tra
 *          trungBinhCong = (num1 + num2 + num3 + num4 + num5) / 5;
 * 
 * B3: Gắn hàm vào sự kiện click
 *  
 * Khối 3: Output (kết quả)
 * + Trung bình cộng (trungBinhCong)
 */

var inpNum1 = document.getElementById("inputNum1");
var inpNum2 = document.getElementById("inputNum2");
var inpNum3 = document.getElementById("inputNum3");
var inpNum4 = document.getElementById("inputNum4");
var inpNum5 = document.getElementById("inputNum5");
var trungBinhCong = 0;

function tinhTrungBinh() {
    
    var num1 = inpNum1.value;
    var num2 = inpNum2.value;
    var num3 = inpNum3.value;
    var num4 = inpNum4.value;
    var num5 = inpNum5.value;

    trungBinhCong = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;
  
    document.getElementById("thongBaoKetQua").innerHTML = ("Trung bình cộng: ") + trungBinhCong.toFixed(1);
}





