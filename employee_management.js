// Task 1- Create an Employee Class

class Employee {
    constructor (name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this. department = department;
    }
    getDetails() {
        return `${this.name} is a ${this.position} in the ${this.department} department with a salary of $${this.salary}.`;
    }
}
// Takes a manager position and returns if they have a bonus
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }
    getDetails() {
        return `${this.name} is a ${this.position} in the ${this.department} department with a salary of $${this.salary} and a bonus of $${this.bonus}.`;
    }
}

const alice = new Employee('Alice', 80000, 'Developer', 'Engineering');
const bob = new Employee('Bob', 75000, 'Designer', 'Marketing');
const charlie = new Manager('Charlie', 120000, 'Engineering Manager', 'Engineering', 2000);
const diana = new Manager('Diana', 130000, 'Marketing Manager', 'Marketing', 2500);

console.log(alice.getDetails());
console.log(bob.getDetails());
console.log(charlie.getDetails());
console.log(diana.getDetails());


//Task 2,3,4,5 - Create and Manage Departments and Employees

class Department {
    constructor (name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee (employee) {
        this.employees.push(employee);
    }
//iterates over employee array and callbacks employee and total salary
    getDepartmentSalary () {
    return this.employees.reduce ((total, employee)=> total + employee.salary, 0); 
}
//Task 4- iterates over employees array to check if they are a manager with a bonus
    calculateTotalSalaryWithBonus () {
        return this.employees.reduce ((total, employee) => {
            if (employee instanceof Manager){
                return total +employee.salary + employee.bonus; // adds bonus if they are a manager
            }
            return total + employee.salary; // adds salary to total if theres no bonus
        }, 0 );
    }
}

// adding instancs of department classes
const engineering = new Department('Engineering'); 
const marketing = new Department('Marketing');

//adds employees to respective departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

console.log(`Total salary for ${engineering.name} department: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary for ${marketing.name} department: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for ${engineering.name} department $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary with bonuses for ${marketing.name} department $${marketing.calculateTotalSalaryWithBonus()}`);





