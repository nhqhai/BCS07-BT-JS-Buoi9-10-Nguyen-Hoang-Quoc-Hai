"use strict";

function nhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLam) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam; // Tính Tổng Lương

  this.tongLuong = function () {
    var tongLuong = 0;

    if (this.chucVu === "Sếp") {
      tongLuong = this.luongCoBan * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      tongLuong = this.luongCoBan * 2;
    } else {
      tongLuong = this.luongCoBan;
    }

    return tongLuong;
  }; // Tính Xếp Loại


  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "Nhân Viên Xuất Sắc;";
    } else if (this.gioLam >= 176) {
      return "Nhân Viên Giỏi";
    } else if (this.gioLam >= 160) {
      return "Nhân Viên Khá";
    } else if (this.gioLam < 160) {
      return "Nhân Viên Trung Bình";
    }
  };
}