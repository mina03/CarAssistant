import { Component, OnInit } from '@angular/core';
import {ConversationService} from './conversation.service'

@Component({
    selector: 'photos',
    template: `<h2>Photos Page</h2>
                `,
    providers: [ConversationService]
})
export class PhotosComponent implements OnInit {
    photos:any;
    constructor(private photoservice:ConversationService) { 
        
    }

    ngOnInit() { 
        //To Consume from Promises
        /*this.photoservice.getPhotos().then(response=>{
            this.photos = response
        })*/

        //Subscribe to Observables
        this.photoservice.getPhotos2().subscribe(photos=>{
            this.photos = photos;
        })
    }
}