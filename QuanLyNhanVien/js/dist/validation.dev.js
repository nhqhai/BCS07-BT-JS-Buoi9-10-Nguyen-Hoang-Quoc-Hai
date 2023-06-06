"use strict";

function kiemTraRong(checkInput, idThongBao) {
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Không được để trống các ô";
    return false;
  }
} // function kiemTraEmail(checkInput, idThongBao) {
//   var regexEmail =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   var hopLe = regexEmail.test(checkInput);
//   if (hopLe) {
//     document.getElementById(idThongBao).innerHTML = "";
//     return true;
//   } else {
//     document.getElementById(idThongBao).innerHTML = "Email sai định dạng hoặc trống";
//     return false;
//   }
// }


function kiemTraTaikhoan(checkInput, idThongBao) {
  var regexTaiKhoan = /^[a-zA-Z]{4,6}$/;
  var hopLe = regexTaiKhoan.test(checkInput);

  if (hopLe) {
    document.getElementById("idThongBao").innerHTML = "";
    return true;
  } else {
    document.getElementById("idThongBao").innerHTML = "Nhập vào phải từ 4 - 6 chữ cái và không có khoảng trắng.";
    return false;
  }

  ;
}