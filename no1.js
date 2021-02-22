const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve('hari ini adalah hari ' + cek + ' saatnya bekerja')
            } else {
                reject(new Error('Hari ini Bukan Hari Kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('selasa')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

// then : sebuah aksi ketika sebuah promise terpenuhi dan menjalankan yang ada didalam resolve 
// catch : sebuah aksi ketika sebuah promise tidak terpenuhi dan menjalankan yang ada didalam reject

// const cekHari = async ()=>{
//     try {
//         const cek = await cekHariKerja('senin');
//         console.log(cek);
//     } catch (error) {
//         console.log(error);
//     }
// }
// cekHari()

// Untuk menangani Error (error handling) pada async/await bisa menggunakan try catch
// try : menyisipkan code javascript yang mungkin terjadi error dan jika berhasil menampilkan resolve dan jika tidak berhasil menampilkan reject
// catch : menangkap error yang terjadi pada blok Try apabila pada blok Try si error muncul dan menjalankan yang ada didalam reject