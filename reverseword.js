// let a = 'saya sedang belajar javascript'
const reverseWord = (cek) => {
    let kata = cek.split(" ")
    let hasil = ''
    for (i = kata.length; i > 0; i--) {
        hasil += kata[i - 1] + ' '
    }
    console.log(hasil);
}
reverseWord('saya sedang belajar javascript');