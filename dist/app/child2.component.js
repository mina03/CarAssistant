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
var message_service_1 = require("./message.service");
var UserInputComponent = (function () {
    function UserInputComponent(messageservice) {
        this.messageservice = messageservice;
    }
    UserInputComponent.prototype.ngOnInit = function () { };
    UserInputComponent.prototype.sendMsg = function (msgInput) {
        //invoke the service
        this.messageservice.sendMsg(msgInput);
    };
    return UserInputComponent;
}());
UserInputComponent = __decorate([
    core_1.Component({
        selector: 'userinput',
        template: "\n    <div>\n    Enter Message: <input type=\"text\" #msgInput><button (click)=\"sendMsg(msgInput.value)\">Send Message</button>\n    </div>",
        styles: ["\n    \n    h2{\n        color:blue;\n        }"
        ]
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], UserInputComponent);
exports.UserInputComponent = UserInputComponent;
//# sourceMappingURL=child2.component.js.map