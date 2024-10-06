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


//Task 2- Create a Department Class

class Department {
    constructor (name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee (employee) {
        this.employees.push(employee);
    }
    getDepartmentSalary () {
    return this.employees.reduce ((total, employee)=> total + employee.salary, 0);
}
    calculateTotalSalaryAndBonus () {
        return this.employees.reduce ((total, employee) => {
            if (employee instanceof Manager){
                return total +employee.salary + employee.bonus;
            }
            return total + employee.salary;
        }, 0 );
    }
}

const engineering = new Department('Engineering');
const marketing = new Department('Marketing');

engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

console.log(`Total salary for ${engineering.name} department: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary for ${marketing.name} department: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for ${engineering.name} department $${engineering.calculateTotalSalaryAndBonus()}`);
console.log(`Total salary with bonuses for ${marketing.name} department $${marketing.calculateTotalSalaryAndBonus()}`);





