import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { EmailServiceService } from 'src/app/services/email-service/email-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email:Email = new Email("", "", "", "");
  isValid: boolean = false;
  
  constructor(private emailService: EmailServiceService) { }

  ngOnInit(): void {
  }

  sendEmail():void {
    this.emailService.sendEmail(this.email).subscribe();
  }

  submit():void {
    // this.sendEmail();

  }
}
