// 1

// async function hi(resolve, reject) {
//     return Promise.resolve(10);
// }
// async function dei() {
//   const res = await hi();
//   setTimeout(() => {
//     console.log(res + res);
//   });
// }

// dei()

// 2

// async function sequence(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }

// async function logs() {
//     await sequence(1000)
//     console.log("one");

//     await sequence(2000)
//     console.log('two');

//     await sequence(3000)
//     console.log('three');
// }
// logs()

// 3

// async function getData() {

//     try{
//         const response = await fetch("./task.json")

//         if (!response.ok) {
//             throw new Error("Error occuried while conneceting")
//         }
//         const data = await response.json()
//         console.log(data);
//        for (const datas in data) {
//         console.log(datas , data.keys);
//        }
//     } catch(error) {
//         console.error(error);
//     }
// }
// getData()

// async function getDetails() {
//   try {
//     const userDetail = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );

//     if (!userDetail.ok) {
//       throw new Error("Not connected!");
//     }

//     const data = await userDetail.json();
//     console.log(data);

//     console.log(data.name);
//     console.log(data.email);
//     console.log(data.address);
//     const list = document.getElementById("li");
//     let name = document.createElement("li");
//     name.innerHTML = `<li>${data.name}</li>`;
//     list.appendChild(name);

//     let email = document.createElement("li");
//     email.innerHTML = `<li>${data.email}</li>`;
//     list.appendChild(email);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getDetails();


