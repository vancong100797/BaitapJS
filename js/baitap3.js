/**
 * Khối 1: Input (dữ liệu đầu vào)
 * + uSD, vND
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * 
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Kiểm tra
 *          tienQuyDoi = uSD * vND;
 * 
 * B3: Gắn hàm vào sự kiện click
 *  
 * Khối 3: Output (kết quả)
 * + Tổng tiền (tienQuyDoi)
 */


var inpUSD = document.getElementById("inputUSD");
var inpVND = document.getElementById("inputVND");
var tienQuyDoi = 0;

function quyDoiTien() {
    
    var uSD = inpUSD.value;
    var vND = inpVND.value;

    tienQuyDoi = Number(uSD) * Number(vND);

    document.getElementById("doiTien").innerHTML = "Tổng tiền: " + tienQuyDoi.toLocaleString() + " VND";

}
