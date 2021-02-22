const getData = (url) => {
    return new Promise((resolve, reject) => {
        let err = false
        const fetchPromise = fetch(url)
        setTimeout(() => {
            if (!err) {
                return resolve(fetchPromise)
            } else {
                reject(new Error('Maaf data anda tidak bisa tampil'))
            }
        }, 2000);
    })
}





// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         let err = false
//         const fetchPromise = fetch(url)
//         setTimeout(() => {
//             if (!err) {
//                 resolve(fetchPromise
//                     .then(response => {
//                         return response.json();
//                     })
//                     .then(user => {
//                         const names = user.map(person => person.name).join("\n");
//                         console.log(names);
//                     }))
//             } else {
//                 reject(new Error('Maaf data anda tidak bisa tampil'))
//             }
//         }, 2000);
//     })
// }


// const getData = (url) => {
//     const fetchPromise = fetch(url);
//     fetchPromise
//         .then(response => {
//             return response.json();
//         })
//         .then(user => {
//             const names = user.map(person => person.name).join("\n");
//             console.log(names);
//         });
// }


getData("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(user => {
        const names = user.map(person => person.name).join("\n");
        console.log(names);
    })
    .catch((err) => {
        console.log(err);
    })