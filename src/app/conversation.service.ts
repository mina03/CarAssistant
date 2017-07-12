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
    conversationId = '9d9b525b-3576-4741-a873-8482a73d3d93';
    version = '2017-07-07';
    nodeAppUrl = 'http://localhost:6002/api/message';
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
