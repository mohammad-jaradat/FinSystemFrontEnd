import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = ` ${this.tokenStorage.getUser().firstName} ${this.tokenStorage.getUser().lastName} with role= ${this.tokenStorage.getUser().roles[0].name}` ;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        //console.log('login data:'+JSON.stringify(data))
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        //console.log('user:'+JSON.stringify(this.tokenStorage.getUser()))

        //this.roles = ` ${this.tokenStorage.getUser().firstName} ${this.tokenStorage.getUser().lastName} with role= ${this.tokenStorage.getUser().roles[0].name}` ;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
