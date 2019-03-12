import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks = [
    {path: ['/', 'inbox'], label: 'Inbox'},
    {path: ['/', 'outbox'], label: 'Outbox'},
    {path: ['/', 'newEmail'], label: 'Compose New Email'},
    {path: ['/', 'login'], label: 'Login'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
