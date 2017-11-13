import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userGreeting: String;
  newName: String;
  newPassword: String;
  user: any;

  name: String;
  username: String;
  password: String;

  //inject services into constructor
  constructor(private validateService: ValidateService, private authService: AuthService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
    this.userGreeting = " ";
    if (this.authService.loggedIn()) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.userGreeting=this.user.name;
    }
    this.newName=this.userGreeting;
  }


  onRegisterSubmit() {



    //create an object from create user fields
    const newUser = {
      name: this.name,
      username: this.username,
      password: this.password
    }

    //Required Fields
    if (!this.validateService.validateRegister(newUser)) { //not all filled
      this.flashMessage.show("Please fill in all fields", { cssClass: 'alert-danger', timeout: 6000 });
      return false;
    }

    //Register
    this.authService.registerUser(newUser).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 6000 });
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 6000 });
      }
    });
  }

  onEditSubmit() {

    if(this.newPassword==undefined) {
      this.newPassword=null;
    }

    const editUser = {
      id: this.user.id,
      name: this.newName,
      username: this.user.username,
      password: this.newPassword
    }

    this.authService.updateUser(editUser).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 6000 });
        //If user editted is the user logged in.
        if(editUser.id==this.user.id) {
          this.userGreeting=editUser.name;
          const updateUser = {
            id: editUser.id,
            name: editUser.name,
            username: editUser.username
          }
          this.authService.updateUserData(updateUser);
        }
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 6000 });
      }
    });

  }



}
