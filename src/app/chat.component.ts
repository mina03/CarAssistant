import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {MessageService} from './message.service'
import {ConversationService} from './conversation.service'
import {Message} from './message'

@Component({
    selector: 'chat',
    template: `<div id="chat_container" style="overflow-y: scroll; height:400px;">
               <table>
                <tr *ngFor="let mesg of messages" class={{mesg.type}}><td>{{mesg.data}}</td>
                </tr>    
                </table>
                </div>
               `,
    styles:[`

    div {
        border: 1px solid black;
        width:800px;
        display:block;
        margin-left:auto;
        margin-right:auto;
    }
    table {
        width:inherit;
    }
    tr {
        height:30px;
        width:inherit;
    }
    .chatTypeMe {
        background-color:#D3D3D3;
        text-align:left;
    }
    .chatTypeBot {
        background-color:#F0F8FF;
        text-align:right;
    }
    `
    ],
    providers: [ConversationService]
})
export class ChatComponent implements OnInit {
    messages:any[]= [];
    index:number = -1;
    chatTypeClass:string = "chatTypeMe"; 
    // [ngStyle]="{ 'background-image': 'url(' + imgPath + ')'}"
    //imgPath:string = "images/request.png";
    conversationResponse:any = "";
    constructor(private messageservice:MessageService, private conversationservice:ConversationService) { }

    ngOnInit() { 
        this.messageservice.msgBroadcaster.subscribe(data=>{
            this.index++;
            
            this.chatTypeClass = "chatTypeMe";
            let message = new Message(this.chatTypeClass,data) 
            this.messages[this.index] = message;
            //alert(this.messages[this.index].data);
            this.fetchConversationResponse(data);
        })
        this.fetchConversationResponse("");
    }

    fetchConversationResponse(data:string)
    {
        this.conversationservice.fetchResponse({"input":{"text":data}}).subscribe(conversationResponse=>{
            this.conversationResponse = conversationResponse;
            
            let str = JSON.stringify(this.conversationResponse);
            let obj = JSON.parse(str);
            //alert(obj.output.text);
            this.index++;
            this.chatTypeClass = "chatTypeBot";
            let message = new Message(this.chatTypeClass,obj.output.text)
            this.messages[this.index] = message;     
    });
    }
}