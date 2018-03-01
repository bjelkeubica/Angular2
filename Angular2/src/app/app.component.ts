import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['app/app.component.css'],
})

export class AppComponent  {
    numberOfEmployees = 'Number of employees: ';
    bestEmployeeDetails = 'Best employee details'
    imagePath = './app/images/angular_logo.png';

    badHtml: string = 'Hello <script>alert("Hacked");</script> World';
}
