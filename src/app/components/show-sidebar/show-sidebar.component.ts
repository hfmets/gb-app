import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/video.model';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-show-sidebar',
  templateUrl: './show-sidebar.component.html',
  styleUrls: ['./show-sidebar.component.css'],
})
export class ShowSidebarComponent implements OnInit {
  showList: MenuItem[] = [
    {
      label: 'Shows',
      items: [],
      expanded: true
    }
  ]


  constructor(private showService: ShowService) {
    this.showService
      .getShowTitles()
      .pipe(
        map((shows: Show[]): MenuItem[] =>
          shows.map(
            (show: Show): MenuItem => ({
              label: show.title,
              items: [],
              id: show.id.toString(),
              routerLink: '/shows/' + show.id,
              command: () => console.log('clicked'),
            })
          )
        )
      )
      .subscribe((res) => (this.showList[0].items = res));
    /*this.items$ = this.showService
      .getShowTitles()
      .pipe(
        map((shows: Show[]): MenuItem[] =>
          shows.map(
            (show: Show): MenuItem => ({
              label: show.title,
              items: [],
              id: show.id.toString(),
              routerLink: '/shows/' + show.id,
              command: () => console.log("clicked")
            })
          )
        )
      );
      */
  }

  ngOnInit(): void {}
}
