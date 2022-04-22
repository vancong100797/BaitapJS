/**
 * Khối 1: Input (dữ liệu đầu vào)
 * + cDai, cRong
 * 
 * Khối 2: Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * 
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ Form
 *      + Kiểm tra
 *          cVi = (cDai + cRong) * 2;
 *          dTich = cDai * cRong; 
 * 
 * B3: Gắn hàm vào sự kiện click
 *  
 * Khối 3: Output (kết quả)
 * + Chu vi (cVi)
 * + Diện tích (dTich)
 */

var inputDai = document.getElementById("ipDai");
var inputRong = document.getElementById("ipRong");

function tinhCv() {
    
    var cDai = inputDai.value;
    var cRong = inputRong.value;

    var cVi = (Number(cDai) + Number(cRong)) * 2;

    document.getElementById("kQ").innerHTML = "Chu vi: " + cVi + "m";    
}

function tinhDt() {
    
    var cDai = inputDai.value;
    var cRong = inputRong.value;

    var dTich = Number(cDai) * Number(cRong);

    document.getElementById("kQ").innerHTML = "Diện tích: " + dTich + "m²";    
}

function tinhCvDt() {
    
    var cDai = inputDai.value;
    var cRong = inputRong.value;

    var cVi = (Number(cDai) + Number(cRong)) * 2;
    var dTich = Number(cDai) * Number(cRong);

    document.getElementById("kQ").innerHTML = "Chu vi: " + cVi + "m" + "<br> Diện tích: " + dTich + "m²" ;    
}
