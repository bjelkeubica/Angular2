import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` 
                <h3>{{numberOfEmployees}}{{10+20+30}}</h3>
                <h3>{{bestEmployeeDetails}}</h3>
                <my-employee></my-employee>
              `
})

export class AppComponent  {
    numberOfEmployees = 'Number of employees: ';
    bestEmployeeDetails = 'Best employee details'
}
