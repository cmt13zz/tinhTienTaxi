document.querySelector('#btnTinhTien').onclick = function () {
    var loaiXe = document.querySelector('input[name="selector"]:checked').value;
    var stringsoKM = document.querySelector('#soKM').value;
    var stringthoiGianCho = document.querySelector('#thoiGianCho').value;
    var divThanhTien = document.getElementById('divThanhTien');
    var thanhTien = 0;

    var soKM = Number(stringsoKM);
    var thoiGianCho = Number(stringthoiGianCho);

    console.log('loaiXe:', loaiXe);
    console.log('soKM', soKM);
    console.log('thoiGianCho', thoiGianCho);


    divThanhTien.style.display = 'block';

    if (soKM < 0 || thoiGianCho < 0) {
        thanhTien = 0;
        return document.querySelector('#xuatTien').innerHTML = thanhTien;
    }

    if (loaiXe === 'uberX') {
        if ((soKM) <= 1) {
            thanhTien = (((soKM) * 8000) + ((thoiGianCho * 2000)));
        }
        else if ((soKM) > 1 && (soKM) <= 20) {
            thanhTien = (((1 * 8000) + ((soKM) - 1) * 12000) + (Number(thoiGianCho) * 2000));
        }
        else if ((soKM) > 20) {
            thanhTien = ((1 * 8000) + (19 * 12000) + (((soKM) - 20) * 10000) + (Number(thoiGianCho) * 2000));
        }
        else {
            thanhTien = 0;
        }

    }

    if (loaiXe === 'uberSUV') {
        if ((soKM) <= 1) {
            thanhTien = (((soKM) * 9000) + ((thoiGianCho * 3000)));
        }
        else if ((soKM) > 1 && (soKM) <= 20) {
            thanhTien = (((1 * 9000) + ((soKM) - 1) * 14000) + ((thoiGianCho) * 3000));
        }
        else if ((soKM) > 20) {
            thanhTien = ((1 * 9000) + (19 * 14000) + (((soKM) - 20) * 12000) + ((thoiGianCho) * 3000));
        }
        else {
            thanhTien = 0;
        }

    }

    if (loaiXe === 'uberBlack') {
        if ((soKM) <= 1) {
            thanhTien = (((soKM) * 10000) + ((thoiGianCho * 4000)));
        }
        else if ((soKM) > 1 && (soKM) <= 20) {
            thanhTien = (((1 * 10000) + ((soKM) - 1) * 16000) + ((thoiGianCho) * 4000));
        }
        else if ((soKM) > 20) {
            thanhTien = ((1 * 10000) + (19 * 16000) + (((soKM) - 20) * 14000) + ((thoiGianCho) * 4000));
        }
        else {
            thanhTien = 0;
        }

    }

    document.querySelector('#xuatTien').innerHTML = thanhTien;
}

document.querySelector('#btnHoaDon').onclick = function () {
    var stringsoKM = document.querySelector('#soKM').value;
    var stringthoiGianCho = document.querySelector('#thoiGianCho').value;
    var xuatTien = document.querySelector('#xuatTien').innerHTML;

    document.querySelector('#txtXuatTien').innerHTML = xuatTien;
    document.querySelector('#txtSoKm').innerHTML = stringsoKM;
    document.querySelector('#txtThoiGianCho').innerHTML = stringthoiGianCho;
}