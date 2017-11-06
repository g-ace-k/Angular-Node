import { Injectable } from '@angular/core';
import { Router,CanActivate} from '@angular/router';
import { AuthService} from '../services/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService, private router:Router) {

    }

    //Used in the app.module.ts under Routes to ensure that a user needs to be logged in to access page
    canActivate() {
        if(this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}