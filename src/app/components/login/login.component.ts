import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ShowService } from 'src/app/services/show.service';
import { UserAuth } from 'src/app/models/video.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  externalAuthUrl: String = 'http://www.giantbomb.com/app/gbexplorer/';
  inputCode: String = '';
  isAuthenticated: boolean = false;
  loginFailed: boolean = false;

  authorize(): void {
    let userInfo: UserAuth;

    this.showService.getUserRegToken(this.inputCode).subscribe((res) => {
      userInfo = res;
      if (userInfo.status == 'success') {
        this.cookie.set('userKey', userInfo.regToken);
        this.isAuthenticated = true;
        this.loginFailed = false;
      } else {
        this.isAuthenticated = false;
        this.loginFailed = true;
      }
    })
  }

  constructor(private showService: ShowService, private cookie: CookieService) {
    if (this.cookie.get('userKey')) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  ngOnInit(): void {}
}
