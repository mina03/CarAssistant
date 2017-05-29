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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var http_3 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var ConversationService = (function () {
    function ConversationService(http) {
        this.http = http;
        this.conversationServiceUrl = 'https://gateway.watsonplatform.net/conversation/api/v1/workspaces/2c617169-0ba6-4f83-a76f-85d887e311f8/message/?version=2017-05-23';
    }
    ConversationService.prototype.getPhotos = function () {
        //Make an HTTP request to fetch the photo list
        return this.http.get('https://jsonplaceholder.typicode.com/photos').toPromise().then(function (response) { return response.json(); });
    };
    ConversationService.prototype.getPhotos2 = function () {
        //Make an HTTP request to fetch the photo list
        return this.http.get('https://jsonplaceholder.typicode.com/photos').map(function (response) { return response.json(); });
    };
    ConversationService.prototype.fetchResponse = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_3.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        var data = this.http.post(this.conversationServiceUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
        return data;
    };
    return ConversationService;
}());
ConversationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ConversationService);
exports.ConversationService = ConversationService;
//# sourceMappingURL=conversation.service.js.map