let DiemTX = document.getElementById('diemtx')
let DiemGK = document.getElementById('diemgki')
let DiemCK = document.getElementById('diemcki')
let DiemTB = document.getElementById('tbmon')
let XepLoai = document.getElementById('xeploai')
let DiemA = document.getElementById('diemA')
let DiemB = document.getElementById('diemB')
let DiemB2 = document.getElementById('diemb2')
let btnRun = document.querySelector('#btnRun');

function KTraDiem(diem) {
    if (isNaN(diem)) { diem = 0; window.alert('Điểm phải là 1 số') }
    else if (diem >= 0 && diem <= 10) {
        return true;
    }
    else {
        diem = 0;
        return false;
    }
}

function TBMon() {
    let tx = parseFloat(DiemTX.value.trim());
    let gk = parseFloat(DiemGK.value.trim());
    let ck = parseFloat(DiemCK.value.trim());

    if (tx > 10 || gk > 10 || ck > 10) window.alert('Điểm ko được nhập lớn hơn 10')
    if (KTraDiem(tx) && KTraDiem(gk) && KTraDiem(ck)) {
        let tbm = ((tx * 0.3) + (gk * 0.2) + (ck * 0.5)).toFixed(1);
        DiemTB.innerHTML = tbm;
        //=== Xep loai ===
        if (tx < 4 || gk < 4 || ck < 4) XepLoai.innerHTML = 'F';
        else if (tbm >= 8.5) XepLoai.innerHTML = 'A';
        else if (tbm >= 8) XepLoai.innerHTML = 'B+';
        else if (tbm >= 7) XepLoai.innerHTML = 'B';
        else if (tbm >= 6.5) XepLoai.innerHTML = 'C+';
        else if (tbm >= 5.5) XepLoai.innerHTML = 'C';
        else if (tbm >= 5) XepLoai.innerHTML = 'D+';
        else if (tbm >= 4) XepLoai.innerHTML = 'D';
        else XepLoai.innerHTML = 'F';

        // Diem can dat de A, B+ va qua mon
        DiemA.innerHTML = ((8.5 - tx * 0.3 - gk * 0.2) / 0.5).toFixed(1);
        DiemB.innerHTML = ((8 - tx * 0.3 - gk * 0.2) / 0.5).toFixed(1);
        DiemB2.innerHTML = ((7 - tx * 0.3 - gk * 0.2) / 0.5).toFixed(1);
    }


}

btnRun.addEventListener('click', () => TBMon())
