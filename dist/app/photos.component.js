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
var conversation_service_1 = require("./conversation.service");
var PhotosComponent = (function () {
    function PhotosComponent(photoservice) {
        this.photoservice = photoservice;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        //To Consume from Promises
        /*this.photoservice.getPhotos().then(response=>{
            this.photos = response
        })*/
        var _this = this;
        //Subscribe to Observables
        this.photoservice.getPhotos2().subscribe(function (photos) {
            _this.photos = photos;
        });
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    core_1.Component({
        selector: 'photos',
        template: "<h2>Photos Page</h2>\n                ",
        providers: [conversation_service_1.ConversationService]
    }),
    __metadata("design:paramtypes", [conversation_service_1.ConversationService])
], PhotosComponent);
exports.PhotosComponent = PhotosComponent;
//# sourceMappingURL=photos.component.js.map