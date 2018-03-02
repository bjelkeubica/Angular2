import { Component } from '@angular/core'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeListComponent {
    employees: any[];

    constructor() {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 850, dateOfBirth: '6/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 777.95, dateOfBirth: '3/3/1990' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 735, dateOfBirth: '10/10/1989' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 742.826, dateOfBirth: '9/23/1988' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 643.826, dateOfBirth: '1/19/1992' }
        ];
    }

    //We will need this for radio buttons above table
    selectedEmployeeCountRadioButton: string = 'All';

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
    
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}