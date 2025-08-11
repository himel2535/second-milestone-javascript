const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function totalSalary(employees){
    sum=0;
    for (employee of employees){
        incrementWithExperience=employee.experience*employee.increment;
        addWithStarting=employee.starting+incrementWithExperience;
        sum=sum+addWithStarting;
        console.log('Per month Salary of',employee.name,'is :',addWithStarting)
    }
    return sum;
}
const total=totalSalary(employees);
console.log('Total cost of company is',total,'per month for employees.')