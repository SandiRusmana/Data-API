// const showlist = async () => {
//   await fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       createlist(data)
//     })
// };

// showlist();

// function createlist(data){
//   const mainUL = document.createElement("ol");
//   for (let i = 0; i<data.result.length; i++){
//     const studentLi = document.createElement("li");
//     studentLi.innerHTML = data.result[i].name;

//     const marksUl = document.createElement("ul");
//     for (var key in data.result[i].marksUl){
//       const marksLi = document.createElement("li");
//       marksLi.innerHTML = key + ":" + data.result[i].marks[key];
//       marksUl.appendChild(marksLi);
//     }
//     studentLi.appendChild(marksUl);
//     mainUL.appendChild(studentLi);
//   }
//   document.body.appendChild(mainUL);
// }

const showlist = async () => {
  await fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

showlist();
