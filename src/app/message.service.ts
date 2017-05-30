import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MessageService {

    subj:Subject<string> = new Subject<string>(); // Data to be exchanged
    msgBroadcaster = this.subj.asObservable(); // Handle to the data
    constructor(){
    }
    sendMsg(msg:string) {
        this.subj.next(msg);// Add the msg to the stream
    }

}
