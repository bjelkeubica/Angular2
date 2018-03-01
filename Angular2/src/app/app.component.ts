import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})

export class AppComponent  {
    numberOfEmployees = 'Number of employees: ';
    bestEmployeeDetails = 'Best employee details'
    imagePath = './app/images/angular_logo.png';
}
