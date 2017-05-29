import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service';

@Component({
    selector: 'userinput',
    template: `
    <div>
    Enter Message: <input type="text" #msgInput [(ngModel)]="msg"><button (click)="sendMsg(msgInput.value)">Send Message</button>
    </div>`,
    styles:[`
    
    div{
        margin-left: auto;
        margin-right: auto;
        width:650px;
    }
    input{
        width:400px;
        }`
    ]
})
export class UserInputComponent implements OnInit {
    msg:string = '';
    constructor(private messageservice:MessageService) { }
    
    ngOnInit() { }
    sendMsg(msgInput:string):void{
        //invoke the service
        this.messageservice.sendMsg(msgInput);
        this.msg = '';
    }
}