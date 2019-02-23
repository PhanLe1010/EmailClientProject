import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';
import { NgForm } from '@angular/forms';
import { EmailsService } from '../emails.service';
import {HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  toEmail = '';
  subject = '';
  text = '';

  constructor(public emailService: EmailsService,
              private http: HttpClient,
              public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  clearForm(){
    //@ts-ignore TS2349
    document.getElementById('newEmailForm').reset();
  }

  onSend(form: NgForm) {
    if(form.invalid){
      return;
    }
    const newEmail: Email = {
      id: null,
      from: form.value.toEmail,
      to: 'current_user@gmail.com',
      subject: form.value.subject,
      text: form.value.text,
      received: new Date(),
      read: false
    };

    this.http.post<{message: string, email: Email}>('http://localhost:3000/api/sent_emails ', newEmail)
        .subscribe(
          data => {
            form.resetForm();
            console.log(data.email);
            this.snackbar.open('Successfully sent message!','', {duration: 3000});
            this.emailService.emails.unshift(data.email);
          },
          error => {
            this.snackbar.open('Error! Couldn\'t sent the message','', {duration: 3000});
          }
        );

  }

}
