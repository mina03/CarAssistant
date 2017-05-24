import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service'

@Component({
    selector: 'chatbot',
    template: `<h1>Car Assistant</h1>
    <chat></chat>
    <userinput></userinput>`,
    styles:[`
    
    h1{
        color:blue;
        }`

    ],
    providers:[MessageService]
})
export class ChatBotComponent implements OnInit {
    
    constructor() { }
    ngOnInit() { }
}