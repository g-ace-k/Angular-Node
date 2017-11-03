import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { ValidateService} from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isIn = false;   // store state

  constructor(private authService: AuthService,private validateService: ValidateService,private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }

  onLogoutClick() {
    this.authService.logout();
    console.log("HERE");
    this.flashMessage.show("You are logged out",{cssClass: "alert-success",timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }

}
