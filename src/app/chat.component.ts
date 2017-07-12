import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service';
import {ConversationService} from './conversation.service';
import {WeatherService} from './weather.service';
import {Message} from './message';

@Component({
    selector: 'chat',
    template: `<div id="chat_container" style="overflow-y: scroll; height:500px;">
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
    providers: [ConversationService, WeatherService]
})
export class ChatComponent implements OnInit {
    messages:any[]= [];
    index:number = -1;
    chatTypeClass:string = 'chatTypeMe';
    conversationContext:string = '';
    postData:any;
    conversationResponse:any = '';
    weatherResponse:any = '';
    constructor(private messageservice:MessageService, private conversationservice:ConversationService, private weatherservice:WeatherService) { }
    ngOnInit() { 
        this.messageservice.msgBroadcaster.subscribe(data=>{
            this.index++;
            this.chatTypeClass = 'chatTypeMe';
            let message = new Message(this.chatTypeClass,data);
            this.messages[this.index] = message;
            this.fetchConversationResponse(data);
        });
        this.fetchConversationResponse('');
    }

    fetchConversationResponse(data:string){
        if(this.conversationContext === ''){
            this.postData = {'input':{'text':data}};
        }
        else{
            // add the context
            this.postData = {'input':{'text':data}, 'context':this.conversationContext};
        }
        this.conversationservice.fetchResponse(this.postData).subscribe(conversationResponse=>{
            this.conversationResponse = conversationResponse;
            let str = JSON.stringify(this.conversationResponse);
            let obj = JSON.parse(str);
            this.index++;
            this.chatTypeClass = 'chatTypeBot';
            let responseMesg = '';
            //if(obj.output.text != '') {
                responseMesg = obj.output.text;
                this.appendMessage(responseMesg,obj);
                if(obj.output.action === 'check_ticket_exists')
                {
                    // Make api call to check if ticket exists
                    responseMesg = 'Ticket does not exist. I shall create the ticket with Category: '+obj.context.category+' and Sub-Category: '+obj.context.sub_category+'. Would you like to add urgency? (Enter Yes/No)';
                    this.appendMessage(responseMesg,obj);
                }
                else if(obj.output.action === 'create_ticket')
                {
                    // Make api call to create ticket
                    if(obj.context.Urgency === undefined && obj.context.comments === undefined)
                    {
                        responseMesg = 'Thanks for the information. A ticket with default urgency(Low) has been created. We will get back to you soon.';
                    }
                    else if(obj.context.Urgency != undefined && obj.context.comments === undefined)
                    {
                        responseMesg = 'Thanks for the information. A ticket with Urgency: '+obj.context.Urgency +' has been created. We will get back to you soon.';
                    }
                    else if(obj.context.Urgency === undefined && obj.context.comments != undefined)
                    {
                        responseMesg = 'Thanks for the information. A ticket with default urgency(Low) and Comments: '+obj.context.comments+' has been created. We will get back to you soon.';
                    }
                    else
                    {
                        responseMesg = 'Thanks for the information. A ticket with Urgency: '+obj.context.Urgency +' and Comments: '+obj.context.comments+' has been created. We will get back to you soon.';
                    }
                    this.appendMessage(responseMesg,obj);
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
    }

    appendMessage(responseMesg:string, obj:any){
        let message = new Message(this.chatTypeClass,responseMesg);
        this.conversationContext = obj.context;
        this.messages[this.index] = message;
    }
}
