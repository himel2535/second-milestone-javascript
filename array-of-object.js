const students = [
    {name:'monwar',roll:2120,year:'final year',getJob:false},
    {name:'anwar',roll:2118,year:'final year',getJob:false},
    {name:'jafar',roll:2130,year:'final year',getJob:false},
    {name:'muhim',roll:2121,year:'final year',getJob:false},
    {name:'murad',roll:398,year:'final year',getJob:true}
]
console.log(students[0])
students[0].name='Himel';
for (const student of students){
    console.log(student.name,':',student.roll)
}
console.log(students)