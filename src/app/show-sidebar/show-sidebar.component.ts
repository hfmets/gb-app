import { Component, Input, OnInit, Output } from '@angular/core';
import { ShowService } from '../show.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { Show } from '../video.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-show-sidebar',
  templateUrl: './show-sidebar.component.html',
  styleUrls: ['./show-sidebar.component.css'],
})
export class ShowSidebarComponent implements OnInit {
  shows?: Array<Show>;
  items!: MenuItem[];
  item?: MenuItem;

  getShows(): void {
    this.showService.getShowTitles().subscribe(res => this.shows = res);
  }

  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getShows();

    this.shows?.forEach(show => {
      this.item = {label: show.title};
      this.items.push(this.item);
    })
  }
}
