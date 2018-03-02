"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 600, dateOfBirth: '6/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 570.95, dateOfBirth: '3/3/1990' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 530, dateOfBirth: '10/10/1989' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 540.826, dateOfBirth: '9/23/1988' }
        ];
    }
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employee.component.css']
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map