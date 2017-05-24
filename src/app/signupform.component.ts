import { Component, OnInit } from '@angular/core';
import {User} from './User';
@Component({
    selector:'userform',
    templateUrl: 'app/signupform.component.html',
    styles:[`
        input.ng-valid {
            border-left:solid 5px green
        }
        input.ng-invalid {
            border-left:solid 5px red
        }
    `]
    
})
export class SignUpFormComponent  {
    user:User = {
            name : 'James',             
            phone:"1234",
            address:'India'
        
    }

    postForm(userform:any):void{
        //Ajax POST request
        alert("Form posted for "+userform.name);
    }
 
}