import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service'

@Component({
    selector: 'userinput',
    template: `
    <div>
    Enter Message: <input type="text" #msgInput><button (click)="sendMsg(msgInput.value)">Send Message</button>
    </div>`,
    styles:[`
    
    h2{
        color:blue;
        }`
    ]
})
export class UserInputComponent implements OnInit {
    
    constructor(private messageservice:MessageService) { }
    
    ngOnInit() { }
    sendMsg(msgInput:string):void{
        //invoke the service
        this.messageservice.sendMsg(msgInput)
    }
}