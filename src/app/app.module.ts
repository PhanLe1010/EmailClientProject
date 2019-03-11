import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatDialogModule,
        MatToolbarModule} from '@angular/material';
import {TextFieldModule} from '@angular/cdk/text-field';

import { AppComponent } from './app.component';
import { EmailCreateComponent } from './emails/email-create/email-create.component';
import { HeaderComponent } from './header/header.component';
import { EmailListsViewComponent } from './emails/email-lists-view/email-lists-view.component';
import { SingleViewComponent } from './emails/single-view/single-view.component';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import {Routes, RouterModule} from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';



const appRoutes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'login', component: LogInComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    EmailCreateComponent,
    HeaderComponent,
    EmailListsViewComponent,
    SingleViewComponent,
    ModalComponent,
    FooterComponent,
    LogInComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    TextFieldModule,
    MatTabsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
