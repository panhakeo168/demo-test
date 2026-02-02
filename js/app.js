const container = document.querySelector(".container");
const userdata = [
  { name: "keo panha", age: 19, email: "keo panha@gmail.com" },
  { name: "sok vansak", age: 25, email: "sok vansak@gmail.com" },
  { name: "leng satyah", age: 50, email: "leng satyah@gmail.com" },
  { name: "ly vuthysak", age: 15, email: "ly vuthysak@gmail.com" },
  { name: "nhem socheat", age: 14, email: "nhem socheat@gmail.com" },
];

container.innerHTML = `<div class="user">
        <h1 class="heading">${userdata[0].name}</h1>
        <p class="old">${userdata[0].age}</p>
        <p class="email">${userdata[0].email}</p>
      </div>`;

// var txt = "";
// const obj1 = () => {
//   userdata.forEach((e, i) => {
//     txt += `
//         <div class="box">
//            <h1 class="heading">${e["name"]}</h1>
//            <p class="old">${e["age"]}</p>
//            <p class="email">${e["email"]}</p>
//         </div>
//   `;
//   });
//   document.querySelector(".container").innerHTML =
//     `<div class="item-box">${txt}</div>`;
// };
// obj1();

// create element
// const div = document.createElement("div");
// const p = document.createElement("p");
// p.innerHTML = "hello brother";
// // p.classList.add("txt");
// p.setAttribute("id", "txt");
// div.appendChild(p);
// document.body.appendChild(div);
// div.style.cssText = "width:200px; height:300px;";
// console.log(div);

// append appenchild prepend
// for prepend to enter for the first element
// const div = document.createElement("div");
// const h1 = document.createElement("h1");
// const p = document.createElement("p");
// const a = document.createElement("a");
// div.append(h1, p);
// div.prepend(a, h1, p);
// document.body.append(div);
// console.log(document.body);

// Exercise
// const smartphone = ["iphone", "samsung", "LG", "sony"];
// const ul = document.createElement("ul");
// for (i in smartphone) {
//   const li = document.createElement("li"); create li
//   li.textContent = smartphone[i]; asign li
//   ul.appendChild(li); new li in ul
// }
// console.log(ul);

// innertext innerhtml
