import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] | undefined;

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userService.findAll().subscribe(
      data => {
        console.log(data.content);
      this.users = data.content;
    }    
    )
    
    ;
  }


}