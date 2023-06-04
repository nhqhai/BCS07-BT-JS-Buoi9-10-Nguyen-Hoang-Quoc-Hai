"use strict";

var arrNhanVien = [];
getStorage();
renderGiaoDien();

function renderGiaoDien() {
  var content = "";

  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = new NhanVien();
    var nhanVienItem = arrNhanVien[i];
    Object.assign(nhanVien, nhanVienItem);
    var tongLuong = nhanVien.tongLuong();
    var xepLoai = nhanVien.xepLoai();
    content += "\n        <tr>\n            <td>".concat(nhanVien.taiKhoan, "</td>\n            <td>").concat(nhanVien.hoTen, "</td>\n            <td>").concat(nhanVien.email, "</td>\n            <td>").concat(nhanVien.ngayLam, "</td>\n            <td>").concat(nhanVien.chucVu, "</td>\n            <td>").concat(tongLuong, "</td>\n            <td>").concat(xepLoai, "</td>\n            <td>\n                <button onclick=\"xoaNhanVien('").concat(nhanVien.taiKhoan, "')\" class=\"btn btn-danger m-1\">\n                  Xo\xE1 nh\xE2n vi\xEAn\n                </button>\n                <button onclick=\"editNhanVien('").concat(nhanVien.taiKhoan, "')\" class=\"btn btn-warning m-1\">\n                  Ch\u1EC9nh s\u1EEDa Nh\xE2n Vi\xEAn\n                </button>\n              </td>\n            </tr>\n        ");
  }

  document.getElementById("tableDanhSach").innerHTML = content;
}

function themNhanVien() {
  var nhanVien = layInput();

  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    saveStorage(arrNhanVien);
    renderGiaoDien();
    ganInput("", "", "", "", "", "", "", "");
  }
}

document.getElementById("btnThemNV").onclick = themNhanVien;

function xoaNhanVien(taiKhoan) {
  var index = viTriNhanVien(taiKhoan);

  if (index != -1) {
    arrNhanVien.splice(index, 1);
    saveStorage(arrNhanVien);
    renderGiaoDien();
  }
}

function editNhanVien(taiKhoan) {
  var index = viTriNhanVien(taiKhoan);
  var nhanVien = arrNhanVien[index];
  ganInput(nhanVien.taiKhoan, nhanVien.hoTen, nhanVien.email, nhanVien.matKhau, nhanVien.ngayLam, nhanVien.luongCoBan, nhanVien.chucVu, nhanVien.gioLam);
  document.getElementById("tknv").readOnly = true;
}

function capNhatThongTinNhanVien() {
  var nhanVienDaChinhSua = layInput();
  var index = viTriNhanVien(nhanVienDaChinhSua.taiKhoan);
  arrNhanVien[index] = nhanVienDaChinhSua;
  saveStorage(arrNhanVien);
  renderGiaoDien();
}

document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;