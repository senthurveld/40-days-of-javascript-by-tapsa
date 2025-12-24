// retrieve a list of users

// async function users() {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

//     if (!res.ok) {
//       throw new Error("Failed");
//     }
//     const data = await res.json();

//     data.forEach((elem) => {
//       console.log(elem.name);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }
// users();

// Fetch all posts by userId=1

// async function users() {
//   try {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=1`
//     );

//     if (!res.ok) {
//       throw new Error("Failed");
//     }
//     const data = await res.json();

//     data.forEach((elem) => {
//         let p = document.createElement("p");
//         p.innerHTML = `<p>${elem.title}<p/>`;
//         console.log(elem.title);
//     });

//   } catch (err) {
//     console.error(err);
//   }
// }
// users();

// async function postMethod(postData) {
//   const api = `https://jsonplaceholder.typicode.com/posts`;

//   try {
//     const res = await fetch(api, {
//       method : "POST",
//       headers : {"Content-type" : "application/json"},
//       body : JSON.stringify(postData)
//     });
//     const data = await res.json();
//     console.log(res);
//   }
//   catch(error) {
//     console.error(error);
//   }
// }

// const newData = {
//   "title" : "dei thambi thanga kamni",
//   "body" : "ommala dei yarra",
//   "userId" : 9
// }
// postMethod(newData);

// async function putMethod(postData) {
//   const api = `https://jsonplaceholder.typicode.com/posts/1`;

//   try {
//     const res = await fetch(api, {
//       method: "PUT",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(postData),
//     });
//     const data = await res.json();
//     console.log(res);
//     console.log(data);

//   } catch (error) {
//     console.error(error);
//   }
// }

// const newData = {
//   title: "vankam",
//   body: "wanna cuma",
// };
// putMethod(newData);

// async function patchMethod(postData) {
//   const api = `https://jsonplaceholder.typicode.com/posts/1`;

//   try {
//     const res = await fetch(api, {
//       method: "PUT",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(postData),
//     });
//     const data = await res.json();
//     console.log(res);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// const newData = {
//   title: "darling ku dampaku",
// };
// patchMethod(newData);

// async function delMethod(id) {
//   const api = `https://jsonplaceholder.typicode.com/posts/${id}`;

//   try {
//     const res = await fetch(api, {
//       method: "DELETE"
//     });
//     const data = await res.json();
//     console.log(res);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// delMethod(34);

// async function ctLog(postData) {
//   const api = `https://jsonplaceholder.typicode.com/posts`;

//   try {
//     const res = await fetch(api, {
//       method : "POST",
//       headers : {"Content-type" : "application/json"},
//       body : JSON.stringify(postData)
//     });
//     const data = await res.json();
//     console.log(res);
//     console.log(data);

//   }
//   catch(error) {
//     console.error(error);
//   }
// }

// const newData = {
//   "title" : "dei thambi thanga kamni",
//   "body" : "ommala dei yarra",
//   "userId" : 9
// }
// ctLog(newData);

// async function errHand() {
//   const api = `https://jsonplaceholder.gtypicode.co/`;

//   try {
//     const res = await fetch(api)
//     if (!res.ok) {
//       throw new Error(`Error: ${res.status}`)
//     }
//     const data = await res.json();
//     console.log(res);
//     console.log(data);

//   } catch(error) {
//     console.error(error.message);
//   }
// }

// errHand()


// 34444444

// const download = document
//   .getElementById("dBtn")
//   .addEventListener("click", getFile);
// const abort = document.getElementById("aBtn").addEventListener("click", () => {
//   if (controler) {
//     controler.abort("user aborted dwnld");
//     console.log("download canceled");
    
//   }
// });
// const controler = new AbortController();
// const signal = controler.signal;
// const url = "./file.txt";
// async function getFile() {
//   try {
//     console.log(`Downloading`);

//     setTimeout(async () => {
//       const file = await fetch(url, { signal });
//       console.log("Download Complete");

//       const blob = await file.blob();
//       const objectUrl = URL.createObjectURL(blob);

//       const link = document.createElement(`a`);
//       link.href = objectUrl;
//       link.download = "./file.txt";
//       link.click();
//       URL.revokeObjectURL(objectUrl);
//     }, 2500);
//   } catch (err) {}
// }
