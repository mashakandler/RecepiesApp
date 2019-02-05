import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export default class DataService {

    private messageSource = new BehaviorSubject([1,2,3]);
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(num) {
        //debugger
        //var arr = this.messageSource.value;
        this.messageSource.next(num)
    }
}
