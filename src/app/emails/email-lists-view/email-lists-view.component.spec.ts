import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailListsViewComponent } from './email-lists-view.component';

describe('EmailListsViewComponent', () => {
  let component: EmailListsViewComponent;
  let fixture: ComponentFixture<EmailListsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailListsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailListsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
