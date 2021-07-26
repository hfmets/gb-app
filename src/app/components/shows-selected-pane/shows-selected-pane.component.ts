import { Component, Input, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Video } from '../../models/video.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';
import { Pageable } from 'src/app/models/pageable.model';

@Component({
  selector: 'app-shows-selected-pane',
  templateUrl: './shows-selected-pane.component.html',
  styleUrls: ['./shows-selected-pane.component.css'],
})
export class ShowsSelectedPaneComponent implements OnInit {
  videos!: Video[];
  isLoading: boolean = true;
  totalRecords!: number;

  lazyLoadDataVideos(event: LazyLoadEvent) {
    this.isLoading = true;

    const pageableData: Pageable = {
      offset: event.first,
      limit: event.rows
    }

    this.route.params.subscribe(
      (routeParams) => {
        this.showService.getVideosPaginated(pageableData, routeParams.id).subscribe(
          (res) => this.videos = res,
          () => {},
          () => this.isLoading = false
        )
      }
    )
  }



  constructor(
    private showService: ShowService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (routeParams) => {
        this.showService.getTotalNumberOfVideos(routeParams.id).subscribe(
          (res) => this.totalRecords = res
        )
      }
    )
    // this.route.params.subscribe(
    //   (routeParams) => { this.showService.getVideosOfShow(routeParams.id).subscribe(
    //     (res) => this.videos = res
    //   )},
    //   () => {},
    //   () => {
    //     this.isLoading = false;
    //   }
    // )
  }

  ngOnInit(): void {

  }
}
