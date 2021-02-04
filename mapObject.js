const students = [
    {id:25, name:"Milton"},
    {id:26, name:"Abir"},
    {id:27, name:"Firoj"},
    {id:28, name:"Saykat"},
    {id:29, name:"Mamun"}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const biggerId = students.filter(s => s.id>26);
const biggerOne = students.find(s => s.id>26);
console.log(biggerOne);
// console.log(ids);
// for (let i = 0; i < student.name.length; i++) {
//     const element = student[i];
//     console.log(element)
// }