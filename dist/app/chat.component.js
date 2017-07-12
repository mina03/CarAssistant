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
var weather_service_1 = require("./weather.service");
var message_1 = require("./message");
var ChatComponent = (function () {
    function ChatComponent(messageservice, conversationservice, weatherservice) {
        this.messageservice = messageservice;
        this.conversationservice = conversationservice;
        this.weatherservice = weatherservice;
        this.messages = [];
        this.index = -1;
        this.chatTypeClass = 'chatTypeMe';
        this.conversationContext = '';
        this.conversationResponse = '';
        this.weatherResponse = '';
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageservice.msgBroadcaster.subscribe(function (data) {
            _this.index++;
            _this.chatTypeClass = 'chatTypeMe';
            var message = new message_1.Message(_this.chatTypeClass, data);
            _this.messages[_this.index] = message;
            _this.fetchConversationResponse(data);
        });
        this.fetchConversationResponse('');
    };
    ChatComponent.prototype.fetchConversationResponse = function (data) {
        var _this = this;
        if (this.conversationContext === '') {
            this.postData = { 'input': { 'text': data } };
        }
        else {
            // add the context
            this.postData = { 'input': { 'text': data }, 'context': this.conversationContext };
        }
        this.conversationservice.fetchResponse(this.postData).subscribe(function (conversationResponse) {
            _this.conversationResponse = conversationResponse;
            var str = JSON.stringify(_this.conversationResponse);
            var obj = JSON.parse(str);
            _this.index++;
            _this.chatTypeClass = 'chatTypeBot';
            var responseMesg = '';
            //if(obj.output.text != '') {
            responseMesg = obj.output.text;
            _this.appendMessage(responseMesg, obj);
            if (obj.output.action === 'check_ticket_exists') {
                // Make api call to check if ticket exists
                responseMesg = 'Ticket does not exist. I shall create the ticket with Category: ' + obj.context.category + ' and Sub-Category: ' + obj.context.sub_category + '. Would you like to add urgency? (Enter Yes/No)';
                _this.appendMessage(responseMesg, obj);
            }
            else if (obj.output.action === 'create_ticket') {
                // Make api call to create ticket
                if (obj.context.Urgency === undefined && obj.context.comments === undefined) {
                    responseMesg = 'Thanks for the information. A ticket with default urgency(Low) has been created. We will get back to you soon.';
                }
                else if (obj.context.Urgency != undefined && obj.context.comments === undefined) {
                    responseMesg = 'Thanks for the information. A ticket with Urgency: ' + obj.context.Urgency + ' has been created. We will get back to you soon.';
                }
                else if (obj.context.Urgency === undefined && obj.context.comments != undefined) {
                    responseMesg = 'Thanks for the information. A ticket with default urgency(Low) and Comments: ' + obj.context.comments + ' has been created. We will get back to you soon.';
                }
                else {
                    responseMesg = 'Thanks for the information. A ticket with Urgency: ' + obj.context.Urgency + ' and Comments: ' + obj.context.comments + ' has been created. We will get back to you soon.';
                }
                _this.appendMessage(responseMesg, obj);
                obj.context.Urgency = undefined;
                obj.context.comments = undefined;
            }
            //}
            //     else {
            //         if (obj.output.action === 'fetch_time') {
            //             responseMesg = 'Current time is '+new Date().toLocaleTimeString();
            //             this.appendMessage(responseMesg,obj);
            //         }
            //         else if (obj.output.action === 'fetch_date') {
            //             responseMesg = 'Current date is '+new Date().toLocaleDateString();
            //             this.appendMessage(responseMesg,obj);
            //         }
            //         else if (obj.output.action === 'fetch_weather') {
            //             this.weatherservice.getWeatherUpdates({'lat':15.57,'long':73.32}).subscribe(weatherResponse=>{
            //             responseMesg = weatherResponse;
            //             this.appendMessage(responseMesg,obj);
            //         });
            //     }
            // }         
        });
    };
    ChatComponent.prototype.appendMessage = function (responseMesg, obj) {
        var message = new message_1.Message(this.chatTypeClass, responseMesg);
        this.conversationContext = obj.context;
        this.messages[this.index] = message;
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        template: "<div id=\"chat_container\" style=\"overflow-y: scroll; height:500px;\">\n               <table>\n                <tr *ngFor=\"let mesg of messages\" class={{mesg.type}}><td>{{mesg.data}}</td>\n                </tr>    \n                </table>\n                </div>\n               ",
        styles: ["\n    div {\n        border: 1px solid black;\n        width:800px;\n        display:block;\n        margin-left:auto;\n        margin-right:auto;\n    }\n    table {\n        width:inherit;\n    }\n    tr {\n        height:30px;\n        width:inherit;\n    }\n    .chatTypeMe {\n        background-color:#D3D3D3;\n        text-align:left;\n    }\n    .chatTypeBot {\n        background-color:#F0F8FF;\n        text-align:right;\n    }\n    "
        ],
        providers: [conversation_service_1.ConversationService, weather_service_1.WeatherService]
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService, conversation_service_1.ConversationService, weather_service_1.WeatherService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map