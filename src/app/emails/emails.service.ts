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
          this.emails.length = 0;
          data.emails.forEach((email)=>{
            this.emails.push(email);
          })
          this.emails.sort((a:Email,b:Email)=>(
            a.received >= b.received ? -1 : 1
          ));
        });
    return this.emails;
  }

  getEmailById(emailId: string){
    return this.http.get<{message: string, email: Email}>('http://localhost:3000/api/sent_emails/' + emailId);
  }

  deleteEmailById(emailId: string){
    return this.http.delete('http://localhost:3000/api/sent_emails/' + emailId);
  }



}
