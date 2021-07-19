import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video, Show } from './video.model';
import { SpinnerService } from './spinner.service';
import { finalize } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  corsPrefix = 'https://cors-anywhere.herokuapp.com/';
  apiKey = '808159f691c371a74a86103df5b7e0116f8f1c5d';
  showCategoryUrl = 'https://www.giantbomb.com/api/video_shows/?api_key=';
  videosUrl = 'https://www.giantbomb.com/api/videos/?api_key=';

  getShowTitles(): Observable<Array<Show>> {
    return this.http
      .get(
        this.corsPrefix +
          this.showCategoryUrl +
          this.apiKey +
          '&format=json&sort=id:asc'
      )
      .pipe(map((res: any) => res.results));
  }

  getVideosOfShow(id: Number): Observable<Array<Video>> {
    this.spinnerService.isLoading();
    return this.http
      .get(
        this.corsPrefix +
          this.videosUrl +
          this.apiKey +
          '&format=json&sort=id:desc&filter=video_show:' +
          id.toString()
      )
      .pipe(map((res: any) => res.results))
      .pipe(finalize(() => this.spinnerService.isLoaded()));
  }

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ) {}
}
