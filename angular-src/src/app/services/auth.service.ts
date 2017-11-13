import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authtoken: any;
  user: any;


  constructor(private http:Http) { }

  registerUser(user) {
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/register',user,{headers:headers}).map(res => res.json());
  }

  deleteUser(user) {
    let headers= new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.delete('users/delete/'+ user._id,{headers:headers}).map(res => res.json());
  }

  authenticateUser(user) {
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/authenticate',user,{headers:headers}).map(res => res.json());
  }

  getProfile() {
    let headers= new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get('users/profile',{headers:headers}).map(res => res.json());
  }

  getUsers() {
    let headers= new Headers();
    this.loadToken();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get('users/allUsers',{headers:headers}).map(res => res.json());
  }

  updateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/updateUser',user,{headers:headers}).map(res => res.json());
  }

  sendEmail(contact) {
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('mailer/sendemail',contact,{headers:headers}).map(res => res.json());
  }

  //save in local storage when logged in
  storeUserData(token,user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user',JSON.stringify(user)); //can only save as string in local storage, parse back to json when accessing
    this.authtoken=token;
    this.user=user;
  }

  updateUserData(user) {
     localStorage.setItem('user',JSON.stringify(user)); //can only save as string in local storage, parse back to json when accessing
     this.user=user;
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authtoken=token;
  }

  //check to see if logged in
  loggedIn() {
    return tokenNotExpired();
  }

  logout() {
    this.authtoken=null;
    this.user=null;
    localStorage.clear();
  }

}
