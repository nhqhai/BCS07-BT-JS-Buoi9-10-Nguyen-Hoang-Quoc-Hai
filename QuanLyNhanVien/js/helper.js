function ganInput(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam,
) {
    document.getElementById("tknv").value = taiKhoan;
    document.getElementById("name").value = hoTen;
    document.getElementById("email").value = email;
    document.getElementById("password").value = matKhau;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value = luongCoBan;
    document.getElementById("chucvu").value = chucVu;
    document.getElementById("gioLam").value = gioLam;
}

function viTriNhanVien(taiKhoan){
    var viTri = -1;
    arrNhanVien.forEach(function(item, index){
        if(item.taiKhoan == taiKhoan) {
            viTri = index;
        }
    });
    return viTri;
}

function layInput(){
    var _taiKhoan = document.getElementById("tknv").value;
    var _hoTen = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _matKhau = document.getElementById("password").value;
    var _ngayLam = document.getElementById("datepicker").value;
    var _luongCoBan = document.getElementById("luongCB").value *1;
    var _chucVu = document.getElementById("chucvu").value;
    var _gioLam = document.getElementById("gioLam").value *1;

    var valid = true;
    valid =
        kiemTraRong(_taiKhoan, "btnThemNV") &
        kiemTraRong(_hoTen,"btnThemNV") &
        kiemTraRong(_email,"tbEmail") &
        kiemTraRong(_matKhau,"btnThemNV") &
        kiemTraRong(_luongCoBan,"btnThemNV") &
        kiemTraRong(_chucVu,"btnThemNV") &
        kiemTraRong(_gioLam,"btnThemNV");

    valid &= kiemTraEmail(_email, "btnThemNV");

    if (!valid) {
        return;
      }

    var nhanVien = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam);

    return nhanVien;
}

function saveStorage(arrNhanVien) {
    localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
  }

  function getStorage() {
    var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
    if (arrNhanVienLocal != null) {
      arrNhanVien = arrNhanVienLocal;
    }
  }