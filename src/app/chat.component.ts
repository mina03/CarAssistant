import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service'
import {ConversationService} from './conversation.service'

@Component({
    selector: 'chat',
    template: `<div id="chat_container" style="overflow-y: scroll; height:400px;">
               <table>
                <tr *ngFor="let mesg of messages"><td>{{mesg}}</td>
                </tr>    
                </table>
                </div>
               `,
    styles:[`
    `
    ],
    providers: [ConversationService]
})
export class ChatComponent implements OnInit {
    messages:any[]= [];
    index:number = 0;
    conversationResponse:string = "";
    constructor(private messageservice:MessageService, private conversationservice:ConversationService) { }

    ngOnInit() { 
        this.messageservice.msgBroadcaster.subscribe(data=>{
            this.messages[this.index] = data;
            this.index++;
        })

        this.conversationservice.fetchResponse({"input":{"text":"hi"}}).subscribe(conversationResponse=>{
            this.conversationResponse = conversationResponse;
            alert(this.conversationResponse);
        })
    }
}