import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/video.model';
import { CookieService } from 'ngx-cookie-service';
import { Pageable } from 'src/app/models/pageable.model';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
  shows!: Show[];
  isLoading: boolean = true;
  isAuthenticated: boolean;
  totalRecords!: number;

  lazyLoadDataShows(event: LazyLoadEvent) {

    const pageableData: Pageable = {
      offset: event.first,
      limit: event.rows
    }

    this.showService.getShowsPaginated(pageableData).subscribe(
      (res) => (this.shows = res),
      () => {},
      () => (this.isLoading = false)
    )
  }

  constructor(private showService: ShowService, private cookie: CookieService) {
    this.showService.getTotalNumberOfShows().subscribe(
      (res) => (this.totalRecords = res)
    )

    if (this.cookie.get('userKey')) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  ngOnInit(): void {}
}
