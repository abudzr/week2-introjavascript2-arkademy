const devideAndSort = (number) => {
    // cek inputan, apakah berupa number atau bukan
    if (typeof (number) === 'number') {
        // 1. Mengubah number menjadi sebuah string
        number = String(number)
        // 2. menghilangkan huruf 0 dan diganti menjadi tanda koma sebagai pemisah = berupa array
        subnumber = number.split("0")
        // 3. deklarikan result dengan array kosong
        result = []
        // 4.membuat perulangan menggunakan for,  Looping sebanyak variable "subnumber" sesuai panjang dari elemen tersebut dan lakukan increment
        for (i = 0; i < subnumber.length; i++) {
            // 5. membagi menjadi per satu huruf dengan pemisahan menggunakan tanda koma.
            x = subnumber[i].split("")
            // 6. mensortir bilangan dari yang terkecil
            x.sort()
            // 7. menggabungkan hasil yang telah disortir
            result[i] = x.join('')
        }
        result = result.join('')
        console.log(result);
    } else {
        console.log("Masukkan Data yang benar");
    }
}
devideAndSort(5956560159466056)