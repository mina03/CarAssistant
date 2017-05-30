import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {WeatherResponse} from './weatherresponse';

@Injectable()
export class WeatherService {
    weatherServiceUrl = 'http://demo2699551.mockable.io/';
    constructor(private http:Http) {}

    getWeatherUpdates(body:Object): Observable<any> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        let data = this.http.post(this.weatherServiceUrl, body, options) // ...using post request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        return data
    }  
}
