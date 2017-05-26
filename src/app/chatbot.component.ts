import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service'

@Component({
    selector: 'chatbot',
    template: `<h3>Car Assistant</h3>
    <chat></chat>
    <userinput></userinput>`,
    styles:[`
    h3{
        color:#2874A6;
        text-align:center;
        }`

    ],
    providers:[MessageService]
})
export class ChatBotComponent implements OnInit {
    
    constructor() { }
    ngOnInit() { }
}