var arrNhanVien = [];

getStorage();

renderGiaoDien();

function renderGiaoDien () {
    var content = "";

    for (var i = 0; i < arrNhanVien.length; i++){
        var nhanVien = new NhanVien();
        var nhanVienItem = arrNhanVien[i];
        Object.assign(nhanVien, nhanVienItem);
        var tongLuong = nhanVien.tongLuong();
        var xepLoai = nhanVien.xepLoai();
        content += `
        <tr>
            <td>${nhanVien.taiKhoan}</td>
            <td>${nhanVien.hoTen}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${tongLuong}</td>
            <td>${xepLoai}</td>
            </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function themNhanVien(){
    var nhanVien = layInput();
    if(nhanVien){
        arrNhanVien.push(nhanVien);
        saveStorage(arrNhanVien);
        renderGiaoDien();
        ganInput("","","","","","","","",);
    }
}
document.getElementById("btnThemNV").onclick = themNhanVien;

function xoaSinhVien(taiKhoan) {
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
  ganInput(
    nhanVien.taiKhoan,
    nhanVien.hoTen,
    nhanVien.email,
    nhanVien.matKhau,
    nhanVien.ngayLam,
    nhanVien.luongCoBan,
    nhanVien.chucVu,
    nhanVien.gioLam,
  );
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