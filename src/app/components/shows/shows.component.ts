import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/video.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
  shows!: Show[];
  isLoading: boolean = true;
  isAuthenticated: boolean;

  constructor(private showService: ShowService, private cookie: CookieService) {
    if (this.cookie.get('userKey') !== '') {
      this.isAuthenticated = true;
      this.showService.getShowTitles().subscribe(
        (res) => (this.shows = res),
        () => {},
        () => (this.isLoading = false)
      );
    } else {
      this.isAuthenticated = false;
    }
  }

  ngOnInit(): void {}
}
