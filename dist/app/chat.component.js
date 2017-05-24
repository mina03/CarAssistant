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
var conversation_service_1 = require("./conversation.service");
var ChatComponent = (function () {
    function ChatComponent(messageservice, conversationservice) {
        this.messageservice = messageservice;
        this.conversationservice = conversationservice;
        this.messages = [];
        this.index = 0;
        this.conversationResponse = "";
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageservice.msgBroadcaster.subscribe(function (data) {
            _this.messages[_this.index] = data;
            _this.index++;
        });
        this.conversationservice.fetchResponse({ "input": { "text": "hi" } }).subscribe(function (conversationResponse) {
            _this.conversationResponse = conversationResponse;
            alert(_this.conversationResponse);
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        template: "<div id=\"chat_container\" style=\"overflow-y: scroll; height:400px;\">\n               <table>\n                <tr *ngFor=\"let mesg of messages\"><td>{{mesg}}</td>\n                </tr>    \n                </table>\n                </div>\n               ",
        styles: ["\n    "
        ],
        providers: [conversation_service_1.ConversationService]
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService, conversation_service_1.ConversationService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map