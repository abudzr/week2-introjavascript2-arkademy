const checkPalindrome = (str) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = str.toLowerCase();
            let y = str.toLowerCase().split('').reverse().join('');
            if (x == y) {
                resolve("ini adalah bilangan palindrome")
            } else {
                reject(new Error('Bukan Palindrome'))
            }
        }, 2000);
    })
}
checkPalindrome("Malam")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })








// const checkPalindrome = (str) => {
//     return new Promise((resolve, reject) => {
//         let x = str.length;
//         setTimeout(() => {
//             for (let i = 0; i < Math.round(x / 2); i++) {
//                 if (str[i] !== str[x - 1 - i]) {
//                     resolve(console.log('bukan palindrome'));
//                 }
//             }
//             return console.log('palindrome');

//         }, 2000);
//     })
// }
// console.log('mulai');
// checkPalindrome(123321);





// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         const main = document.getElementById("main");
//         main.innerHTML = "<p>Loading...";
//         let err = false
//         const fetchPromise = fetch(url)
//         setTimeout(() => {
//             if (!err) {
//                 return resolve(fetchPromise)
//             } else {
//                 reject(new Error('Maaf data anda tidak bisa tampil'))
//             }
//         }, 2000);
//     })
// }
// getData("https://ghibliapi.herokuapp.com/people")
//     .then(response => {
//         return response.json();
//     })
//     .then(people => {
//         main.innerHTML = listOfNames(people);
//     })
//     .catch(err => {
//         main.innerHTML = err;
//     });

// function listOfNames(people) {
//     const names = people.map(person =>
//         `<li>My name : ${person.name} <br>
//             My gender : ${person.gender} </li>`).join("\n");
//     return `<ol>${names}</ol>`
// }