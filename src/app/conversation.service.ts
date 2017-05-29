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
    conversationServiceUrl = 'https://gateway.watsonplatform.net/conversation/api/v1/workspaces/2c617169-0ba6-4f83-a76f-85d887e311f8/message/?version=2017-05-23';
    constructor(private http:Http) {}
    getPhotos():Promise<any>{
        //Make an HTTP request to fetch the photo list
        return this.http.get('https://jsonplaceholder.typicode.com/photos').toPromise().then(response=>response.json());
    }

    getPhotos2():Observable<any>{
        //Make an HTTP request to fetch the photo list
        return this.http.get('https://jsonplaceholder.typicode.com/photos').map(response=>response.json());
    }

    fetchResponse (body: Object): Observable<any> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        let data = this.http.post(this.conversationServiceUrl, body, options) // ...using post request
                         .map(res => <ConversationResponse>res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        return data
    }  
}
