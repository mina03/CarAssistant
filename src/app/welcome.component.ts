import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector:'welcome',
	template:`<h2>{{msg}}</h2>
    <button (click)="viewProducts()">View Products</button><br>
    <button (click)="greet()">Click</button><br>
    <input type="text" (keyup)="display1($event)">{{userInput}}
    <input type="text" #input (keyup)="display2(input.value)">{{userInput}}
    <!-- <input type="text" #input (keyup)="0">{{input.value}} display method not required-->
    Property Binding: <img [src]="imgPath">
    Username property from class: {{username}}
    `,
    styles: [`

    button {
        color:black;
    }
    `
    ]
})

export class WelcomeComponent {
	msg:string = "Welcome to my application"; //Model or property
    userInput:string;
    imgPath:string = "images/profile.png";
    username:string = "Jane";

    constructor(private router:Router)
    {
        
    }
    greet():void
    {
        alert("Hello");
    }

    display1(event:any)
    {
        this.userInput = event.target.value;
    }

    display2(input:string)
    {
        this.userInput = input;
    }

    viewProducts():void
    {
        // Route to ProductsComponent programatically
        this.router.navigate(['/products']);
    }
}