"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.numberOfEmployees = 'Number of employees: ';
        this.bestEmployeeDetails = 'Best employee details';
        this.imagePath = './app/images/angular_logo.png';
        this.badHtml = 'Hello <script>alert("Hacked");</script> World';
        //This is for lifecycle hook
        this.userText = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //templateUrl: './app.component.html',
            //This is for lifecycle hook
            template: "Your Text: <input type='text' [(ngModel)]='userText'/>\n                <br/><br/>\n                <simple [simpleInput]='userText'></simple>\n              ",
            styleUrls: ['app/app.component.css'],
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map