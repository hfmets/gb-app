import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  externalAuthUrl: String = 'http://www.giantbomb.com/app/gbexplorer/';
  inputCode: String = '';
  isAuthenticated: boolean;

  authorize(): void {
    if (this.inputCode != 'Code') {
      this.showService.getUserRegToken(this.inputCode).subscribe((res) => {
        this.cookie.set('userKey', res.regToken);
        this.isAuthenticated = true;
      });
    }
  }

  constructor(private showService: ShowService, private cookie: CookieService) {
    if (this.cookie.get('userKey') !== '') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  ngOnInit(): void {}
}
