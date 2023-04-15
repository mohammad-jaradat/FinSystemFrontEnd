import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  token: any;

  constructor(private localStorgae: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.localStorgae.getUser();
    this.token=this.localStorgae.getToken();
  }

}