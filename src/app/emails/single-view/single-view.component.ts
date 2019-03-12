import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Email } from '../email.model';
import {EmailsService} from '../emails.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
  error = false;
  email: Email = {
    id: null,
    from: '',
    to: '',
    subject: '',
    text: '',
    received: new Date(),
    read: true
  };
  url = this.route.snapshot.url[0].path;
  constructor(private route: ActivatedRoute,
              private emailService: EmailsService,
              private router: Router,
              public snackbar: MatSnackBar ) { }

  ngOnInit() {
     let emailId: string= this.route.snapshot.url[1].path;
     this.emailService.getEmailById(emailId).subscribe(
       (data)=>{
         this.email = data.email;
         console.log(this.email);
       },
       (error) => {
        this.error = true;
      }
     )
  }

  deleteEmailById(){
    this.emailService.deleteEmailById(this.email.id).subscribe(
      (data) => {
        this.router.navigate(['/', this.url]);
        this.snackbar.open('Successfully delete message!','', {duration: 3000});
      }
    );
  }

  reply(){
    this.router.navigate(['reply'], {relativeTo: this.route});
  }

  forward(){
    this.router.navigate(['forward'], {relativeTo: this.route});
  }
}
