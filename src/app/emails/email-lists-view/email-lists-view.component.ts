import { Component, OnInit, Inject } from '@angular/core';
import { Email } from '../email.model';
import {EmailsService} from '../emails.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../../modal/modal.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-email-lists-view',
  templateUrl: './email-lists-view.component.html',
  styleUrls: ['./email-lists-view.component.css']
})
export class EmailListsViewComponent implements OnInit {
  emails: Email[] = [];
  selectedEmails: string[] = [];
  deleteId: string;
  constructor(public emailService: EmailsService,
              public dialog: MatDialog,
              public snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.emailService.getEmails();
    this.emails = this.emailService.emails;
  }

  selectCheckbox($event){
    let id: string = $event.source.id;
    let index = this.selectedEmails.indexOf(id);

    if($event.source.checked && (index === -1)) {
      this.selectedEmails.push(id);
    } else if (!($event.source.checked) && (index !== -1)){
      this.selectedEmails.splice(index, 1);
    }

    console.log(this.selectedEmails);
  }

  deleteMultipleMessage(){
    let count = 0;
    for(let i = 0; i < this.selectedEmails.length; i++){
      for(let j = 0; j < this.emails.length; j++){
        if(this.selectedEmails[i] == this.emails[j].id){
          this.emails.splice(j,1);
          count++;
          console.log(count);

        }
      }
    }
    this.selectedEmails = [];
    this.snackbar.open('Deleted ' +count+ ' the messages!','', {duration: 3000});
  }

  openDialog(event): void {
    let data: Email;
    console.log(event.target.id);
    this.emails.forEach(email => {
      if (email.id == event.target.id){
          data = email;
      }
    });
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '80%',
      height: 'auto',
      data: {
        id: data.id,
        to: data.to,
        from: data.from,
        subject: data.subject,
        text: data.text,
        received: data.received,
        read: data.read
      }
    });

    dialogRef.afterClosed().subscribe(result => {
        this.deleteId = result;
        if(this.deleteId == data.id){
          for(let i = 0; i < this.emails.length; i++){
            if (this.deleteId == this.emails[i].id){
                this.emails.splice(i,1);
                this.snackbar.open('Message deleted successfully!','', {duration: 3000});
                return;
            }
          }
      }
    });
  }
}
