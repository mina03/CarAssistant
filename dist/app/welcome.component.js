"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var WelcomeComponent = (function () {
    function WelcomeComponent(router) {
        this.router = router;
        this.msg = "Welcome to my application"; //Model or property
        this.imgPath = "images/profile.png";
        this.username = "Jane";
    }
    WelcomeComponent.prototype.greet = function () {
        alert("Hello");
    };
    WelcomeComponent.prototype.display1 = function (event) {
        this.userInput = event.target.value;
    };
    WelcomeComponent.prototype.display2 = function (input) {
        this.userInput = input;
    };
    WelcomeComponent.prototype.viewProducts = function () {
        // Route to ProductsComponent programatically
        this.router.navigate(['/products']);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'welcome',
        template: "<h2>{{msg}}</h2>\n    <button (click)=\"viewProducts()\">View Products</button><br>\n    <button (click)=\"greet()\">Click</button><br>\n    <input type=\"text\" (keyup)=\"display1($event)\">{{userInput}}\n    <input type=\"text\" #input (keyup)=\"display2(input.value)\">{{userInput}}\n    <!-- <input type=\"text\" #input (keyup)=\"0\">{{input.value}} display method not required-->\n    Property Binding: <img [src]=\"imgPath\">\n    Username property from class: {{username}}\n    ",
        styles: ["\n\n    button {\n        color:black;\n    }\n    "
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map