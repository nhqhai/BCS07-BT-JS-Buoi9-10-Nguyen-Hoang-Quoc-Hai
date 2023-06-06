var arrNhanVien = [];

getStorage();

renderGiaoDien();

var banGoc;



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
            <td>
                <button onclick="xoaNhanVien('${
                  nhanVien.taiKhoan
                }')" class="btn btn-danger mb-2">
                  Delete
                </button>

                <button onclick="editNhanVien('${
                  nhanVien.taiKhoan
                }')" class="btn btn-warning mb-2">
                  Edit
                </button>

              </td>
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
  document.getElementById("btnThemNV").style.display = 'none';
  function changeTitle() {
    var title = document.getElementById("header-title");
    title.innerHTML = 'Sửa thông tin Nhân Viên';
  }
  document.getElementById("header-title").onclick = changeTitle();
  $('#myModal').modal('show');
  document.getElementById("btnCapNhat").style.display = "block"
};

function capNhatThongTinNhanVien() {
    var nhanVienDaChinhSua = layInput();
    var index = viTriNhanVien(nhanVienDaChinhSua.taiKhoan);
    arrNhanVien[index] = nhanVienDaChinhSua;
    saveStorage(arrNhanVien);
    renderGiaoDien();
    $('#myModal').modal('hide');
};
document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;

$(document).ready(function() {
  banGoc = $('#myModal .modal-content').html();
$('#myModal').on('hidden.bs.modal', function() {
  $('#myModal .modal-content').html(banGoc);
});
});

