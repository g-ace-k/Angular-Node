import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: String;
  text: String;

  //for testing
  emailURL: String;

  constructor(private authService: AuthService,private validateService: ValidateService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onContactSubmit() {
    this.emailURL=undefined;

    const contact = {
      email: this.email,
      text: this.text
    }

    if(!this.validateService.validateEmail(contact.email)) { //incorrect email
      this.flashMessage.show("Please enter a correct email address", { cssClass: 'alert-danger', timeout: 6000 });
      return false;
    }
    else if(!this.validateService.validateContact(contact)) { //empty bodies
      this.flashMessage.show("Please fill in both fields", { cssClass: 'alert-danger', timeout: 6000 });
      return false;
    }

    this.authService.sendEmail(contact).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 6000 });
        this.emailURL=data.url;
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 6000 });
      }
    });

  }

}
