import { Component } from '@angular/core'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeListComponent {
    employees: any[] = [
        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 600, dateOfBirth: '25/6/1988' },
        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 570.95, dateOfBirth: '25/6/1988' },
        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 530, dateOfBirth: '25/6/1988' },
        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 540.826, dateOfBirth: '25/6/1988' }
    ];
}