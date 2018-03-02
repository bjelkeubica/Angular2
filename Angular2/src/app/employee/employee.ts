export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
}

export class Employee implements IEmployee {
    //public code: string;
    //public name: string;
    //public gender: string;
    //public annualSalary: number;
    //public dateOfBirth: string;

    //constructor(code: string, name: string, gender: string, annualSalary: number, dateOfBirht: string) {
    //    this.code = code;
    //    this.name = name;
    //    this.gender = gender;
    //    this.annualSalary = annualSalary;
    //    this.dateOfBirth = dateOfBirht;
    //}

    //All of previous code should be replaced with this in Angular2
    constructor(public code: string, public name: string, public gender: string,
        public annualSalary: number, public dateOfBirth: string) {

    }
}