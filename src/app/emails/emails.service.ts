import { Injectable } from '@angular/core';
import {Email} from './email.model';
import {HttpClient} from '@angular/common/http';
import { Observable, Subscriber, pipe } from 'rxjs';
import { tap, map, filter,catchError, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  emails: Email[] = [];

  constructor(private http: HttpClient) { }

  getEmails(){
    this.http.get<{message: string, emails: Email[]}>('http://localhost:3000/api/sent_emails')
        .subscribe((data) => {
          data.emails.forEach((email)=>{
            this.emails.push(email);
          })
          this.emails.sort((a:Email,b:Email)=>(
            a.received >= b.received ? -1 : 1
          ));
        });
        console.log(this.emails);
    return this.emails;


  }




}
