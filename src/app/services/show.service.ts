import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video, Show } from '../models/video.model';
import { Pageable } from '../models/pageable.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  regToken?: String;
  corsPrefix = 'https://mysterious-dawn-78553.herokuapp.com/';
  authUrl = 'https://www.giantbomb.com/app/myapp/get-result?regCode=';
  showCategoryUrl = 'https://www.giantbomb.com/api/video_shows/?api_key=';
  videosUrl = 'https://www.giantbomb.com/api/videos/?api_key=';

  getShowTitles(): Observable<Array<Show>> {
    return this.http
      .get(
        this.corsPrefix +
        this.showCategoryUrl +
          this.cookie.get('userKey') +
          '&format=json&sort=id:asc'
      )
      .pipe(map((res: any) => res.results));
  }

  getVideosOfShow(id: Number): Observable<Array<Video>> {
    return this.http
      .get(
        this.corsPrefix +
        this.videosUrl +
          this.cookie.get('userKey') +
          '&format=json&sort=id:desc&filter=video_show:' +
          id.toString()
      )
      .pipe(map((res: any) => res.results));
  }

  getTotalNumberOfVideos(id: number): Observable<number> {
    return this.http
      .get(
        this.corsPrefix +
        this.videosUrl +
          this.cookie.get('userKey') +
          '&format=json&filter=video_show:' +
          id.toString()
      )
      .pipe(map((res: any) => res.number_of_total_results));
  }

  getVideosPaginated(
    pageableData: Pageable,
    id: number
  ): Observable<Array<Video>> {
    return this.http
      .get(
        this.corsPrefix +
        this.videosUrl +
          this.cookie.get('userKey') +
          '&format=json&sort=id:desc&filter=video_show:' +
          id.toString() +
          '&limit=' +
          pageableData.limit?.toString() +
          '&offset=' +
          pageableData.offset?.toString()
      )
      .pipe(map((res: any) => res.results));
  }

  getUserRegToken(userCode: String): Observable<any> {
    return this.http
      .get(
        this.corsPrefix +
        this.authUrl + userCode + '&format=json'
      )
      .pipe(map((res: any) => res));
  }

  updateRegToken(regToken: String): void {
    this.regToken = regToken;
  }

  constructor(private http: HttpClient, private cookie: CookieService) {}
}
