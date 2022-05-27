//1//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return `${this.name} ${this.age}`
  }
}

//2//
class Employee extends Person {
  constructor(name, age, employeeID) {
    super(name, age);
    this.employeeID = employeeID = currentID;
  }
  getCompanyName() {
    return `Web Development Solutions Incorporated`
  }
  getEmployeeID() {
    return this.employeeID
  }
}

//3//
class Manager extends Employee{
  constructor(name, age, employeeID, employees){
    super(name, age, employeeID,)
    this.employees = employees
  }
  newEmployee(employeeID){
    return  this.employees.push(employeeID)
  }
  getEmployees(){
    return `${this.employees}`
  }
}


//4//
class Clerk extends Employee{
  constructor(name, age, employeeID, supervisorID){
    super(name, age, employeeID)
    this.supervisorID = supervisorID
  }
  getSupervisor(){
    return `Supervisor ID: ${this.supervisorID}`
  }
}


//5//
var currentID = 0;

//6//
var boss = new Manager("Fig", 33, currentID++, employees=[])


//7//
var clerk1 = new Clerk("Alice", 44, currentID++, boss.getEmployeeID())


//8//
var clerk2 = new Clerk("Bob", 64, currentID++, boss.getEmployeeID())



//9//
boss.newEmployee(` Name: ${this.clerk1.getName()}, EmployeeID: ${this.clerk1.getEmployeeID()} `)

/* console.log(boss)
console.log(clerk1)
console.log(clerk2) */
//10//
boss.newEmployee(` Name: ${this.clerk2.getName()}, EmployeeID: ${this.clerk2.getEmployeeID()} `)
/* console.log(boss)
console.log(clerk1)
console.log(clerk2.employeeID) */

//11//
console.log(clerk1.getSupervisor())
console.log(clerk2.getSupervisor())

//12//
console.log(boss.getEmployees())
console.log(boss.employees)

//5//

