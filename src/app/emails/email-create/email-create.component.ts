import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';
import { NgForm } from '@angular/forms';
import { EmailsService } from '../emails.service';
import {HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  toEmail = '';
  subject = '';
  text = '';


  initToEmail = '';
  initSubject = '';
  initText = '';
  url = '';
  constructor(public emailService: EmailsService,
              private http: HttpClient,
              public snackbar: MatSnackBar,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.route.snapshot.url[2] ? this.route.snapshot.url[2].path : '';

    // if use this component to REPLY
    if(this.url == "reply"){
      this.emailService.getEmailById( this.route.snapshot.url[1].path).subscribe(
        (data)=>{
          this.initToEmail = data.email.from;
          this.initSubject = 'RE: ' + data.email.subject;
          this.initText = '\n\n\n"' + data.email.text + '"';
        }
      )
    }

    // if use this component to FORWARD
    if(this.url == "forward"){
      this.emailService.getEmailById( this.route.snapshot.url[1].path).subscribe(
        (data)=>{
          this.initToEmail = '';
          this.initSubject = 'FW: ' + data.email.subject;
          this.initText = '\n\n\n"' + data.email.text + '"';
        }
      )
    }
  }

  // Fixed the property does not exist error
  clearForm(form: NgForm){
    form.reset();
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

    this.http.post<{message: string, email: Email}>('https://email-client-project-phandaika94.c9users.io:8080/api/sent_emails ', newEmail)
        .subscribe(
          data => {
            form.resetForm();
            console.log(data.email);
            this.emailService.emails.unshift(data.email);
            let snackBarRef = this.snackbar.open('Successfully sent message!',
                                'View', 
                                {duration: 3000, 
                                 verticalPosition: 'top', 
                                 panelClass: ['blue-snackbar'],
                                });
            
            snackBarRef.onAction().subscribe(() => {
              
            })
            
          },
          error => {
            this.snackbar.open('Error! Couldn\'t sent the message','', {duration: 3000, verticalPosition: 'top', panelClass: ['blue-snackbar']});
          }
        );

  }

}
