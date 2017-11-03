import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userGreeting: String;
  usersArray: any;

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.userGreeting = " ";
    if (this.authService.loggedIn()) {
      this.userGreeting = JSON.parse(localStorage.getItem('user')).name;
    }
  }

  createTable() {
    this.authService.getUsers().subscribe(users => {
      this.usersArray = users;
    });
  }

  deleteUser(x) {
    this.authService.deleteUser(this.usersArray[x]).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.createTable();
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

}
