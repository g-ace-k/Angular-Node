import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    //If a field is missing
    if(user.name==undefined || user.username==undefined || user.password==undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  validateLogin(user) {
    //If a field is missing
    if(user.username==undefined || user.password==undefined) {
      return false;
    }
    else {
      return true;
    }
  }


}
