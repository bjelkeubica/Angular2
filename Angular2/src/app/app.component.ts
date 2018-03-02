import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    //This is for lifecycle hook
    //template: `Your Text: <input type='text' [(ngModel)]='userText'/>
    //            <br/><br/>
    //            <simple [simpleInput]='userText'></simple>
    //          `,
    styleUrls: ['app/app.component.css'],
})

export class AppComponent  {
    numberOfEmployees = 'Number of employees: ';
    bestEmployeeDetails = 'Best employee details'
    imagePath = './app/images/angular_logo.png';

    badHtml: string = 'Hello <script>alert("Hacked");</script> World';

    //This is for lifecycle hook
    userText: string = 'Angular';
}
