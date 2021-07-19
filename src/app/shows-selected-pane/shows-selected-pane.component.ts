import { Component, Input, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Video } from '../video.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-shows-selected-pane',
  templateUrl: './shows-selected-pane.component.html',
  styleUrls: ['./shows-selected-pane.component.css'],
})
export class ShowsSelectedPaneComponent implements OnInit {
  videos?: Observable<Array<Video>>;

  getVideos(id: Number): void {
    this.videos = this.showService.getVideosOfShow(id);
  }

  constructor(
    private showService: ShowService,
    private route: ActivatedRoute,
    public spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => { this.getVideos(routeParams.id);
    },
    () => {},
    () => {
      this.spinnerService.isLoaded();
    })
  }
}
