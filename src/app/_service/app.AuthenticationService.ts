import { Injectable } from '@angular/core';
import { HcsService } from './app.hcsservice';
import { UserModel } from '../_model/app.usermodel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    user:UserModel={userId:null,
        userPassword:null,
        userName:null,
        contactNo:null,
        userRole:null,
        userEmail:null,
        age:null,
        gender:null,
        status:null};
  constructor(private service: HcsService) {

   }

  authenticate(username, password) {
    if (username === "" && password === "") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
