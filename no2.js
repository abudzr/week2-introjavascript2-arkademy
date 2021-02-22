const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'Desember']

        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000);
}

const ambilData = ((err, data) => {
    if (!err) {
        data.map((item) => {
            console.log(item);
        })
    } else {
        console.log(err);
    }
})
getMonth(ambilData)









// const ambilData =(data)=>{
//     data.map((item)=>{
//         console.log(item);
//     })
// }

// getMonth(ambilData)


// getMonth((data)=>{
//     data.map((item)=>{
//         console.log(item);
//     })
// })