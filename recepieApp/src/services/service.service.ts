import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export default class DataService {

    private arr = [1,2,3];
    private arrSource = new BehaviorSubject(this.arr);
    arrObsarvable = this.arrSource.asObservable();

    constructor(private http:HttpClient) {

    }

    getData(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users')

    }
    postData(data): Observable<any> {
        return this.http.post('https://jsonplaceholder.typicode.com/users', data)

    }

    updateArr(newArr) {
        //debugger
        //var arr = this.messageSource.value;
        this.arrSource.next(newArr)
    }
}
