import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(user:User){
  let users:User[] = [];
  if(localStorage.getItem('Users')){
    users = JSON.parse(localStorage.getItem('User')!);
    users = [...users,user];
  }else{
    users = [user];
  }
  localStorage.setItem('Users',JSON.stringify(users));
}

}
