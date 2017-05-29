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
var message_1 = require("./message");
var ChatComponent = (function () {
    function ChatComponent(messageservice, conversationservice) {
        this.messageservice = messageservice;
        this.conversationservice = conversationservice;
        this.messages = [];
        this.index = -1;
        this.chatTypeClass = "chatTypeMe";
        this.conversationContext = "";
        this.conversationResponse = "";
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageservice.msgBroadcaster.subscribe(function (data) {
            _this.index++;
            _this.chatTypeClass = "chatTypeMe";
            var message = new message_1.Message(_this.chatTypeClass, data);
            _this.messages[_this.index] = message;
            _this.fetchConversationResponse(data);
        });
        this.fetchConversationResponse("");
    };
    ChatComponent.prototype.fetchConversationResponse = function (data) {
        var _this = this;
        if (this.conversationContext == "") {
            this.postData = { "input": { "text": data } };
        }
        else {
            // add the context
            this.postData = { "input": { "text": data }, "context": this.conversationContext };
        }
        this.conversationservice.fetchResponse(this.postData).subscribe(function (conversationResponse) {
            _this.conversationResponse = conversationResponse;
            var str = JSON.stringify(_this.conversationResponse);
            var obj = JSON.parse(str);
            _this.index++;
            _this.chatTypeClass = "chatTypeBot";
            var message = new message_1.Message(_this.chatTypeClass, obj.output.text);
            _this.conversationContext = obj.context;
            _this.messages[_this.index] = message;
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        template: "<div id=\"chat_container\" style=\"overflow-y: scroll; height:400px;\">\n               <table>\n                <tr *ngFor=\"let mesg of messages\" class={{mesg.type}}><td>{{mesg.data}}</td>\n                </tr>    \n                </table>\n                </div>\n               ",
        styles: ["\n    div {\n        border: 1px solid black;\n        width:800px;\n        display:block;\n        margin-left:auto;\n        margin-right:auto;\n    }\n    table {\n        width:inherit;\n    }\n    tr {\n        height:30px;\n        width:inherit;\n    }\n    .chatTypeMe {\n        background-color:#D3D3D3;\n        text-align:left;\n    }\n    .chatTypeBot {\n        background-color:#F0F8FF;\n        text-align:right;\n    }\n    "
        ],
        providers: [conversation_service_1.ConversationService]
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService, conversation_service_1.ConversationService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map