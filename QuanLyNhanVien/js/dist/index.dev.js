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
    content += "\n        <tr>\n            <td>".concat(nhanVien.taiKhoan, "</td>\n            <td>").concat(nhanVien.hoTen, "</td>\n            <td>").concat(nhanVien.email, "</td>\n            <td>").concat(nhanVien.ngayLam, "</td>\n            <td>").concat(nhanVien.chucVu, "</td>\n            <td>").concat(tongLuong, "</td>\n            <td>").concat(xepLoai, "</td>\n            <td>\n                <button onclick=\"xoaNhanVien('").concat(nhanVien.taiKhoan, "')\" class=\"btn btn-danger mb-2\">\n                  Delete\n                </button>\n\n                <button onclick=\"editNhanVien('").concat(nhanVien.taiKhoan, "')\" class=\"btn btn-warning mb-2\">\n                  Edit\n                </button>\n\n              </td>\n            </tr>\n        ");
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
  document.getElementById("btnThemNV").style.display = 'none';

  function changeTitle() {
    var title = document.getElementById("header-title");
    title.innerHTML = 'Sửa thông tin Nhân Viên';
  }

  document.getElementById("header-title").onclick = changeTitle();

  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  document.querySelector(".btn-warning").onclick = openModal;
}

;

function capNhatThongTinNhanVien() {
  var nhanVienDaChinhSua = layInput();
  var index = viTriNhanVien(nhanVienDaChinhSua.taiKhoan);
  arrNhanVien[index] = nhanVienDaChinhSua;
  saveStorage(arrNhanVien);
  renderGiaoDien();
}

document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;