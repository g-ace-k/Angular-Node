import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { ValidateService} from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private authService: AuthService,private validateService: ValidateService,private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username:this.username,
      password:this.password
    }

//Required fields
    if(!this.validateService.validateLogin(user)) {
      this.flashMessage.show("Please fill in all fields", {cssClass: 'alert-danger',timeout: 6000});
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token,data.user)
        this.router.navigate(['/dashboard']);
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger',timeout: 6000});
      }
    });
  }


}
