import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ConversationResponse} from './conversationresponse';

@Injectable()
export class ConversationService {
    conversationId = '2c617169-0ba6-4f83-a76f-85d887e311f8';
    version = '2017-05-23';
    conversationServiceUrl = 'https://gateway.watsonplatform.net/conversation/api/v1/workspaces/'+this.conversationId+'/message/?version='+this.version;
    constructor(private http:Http) {}
    fetchResponse (body: Object): Observable<any> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        let data = this.http.post(this.conversationServiceUrl, body, options) // ...using post request
                         .map(res => <ConversationResponse>res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        return data;
    }  
}
