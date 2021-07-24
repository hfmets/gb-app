import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  @Input() video?: Video;
  beenClicked: boolean = false;
  videoUrl?: String;

  playClick(): void {
    this.beenClicked = !this.beenClicked;
  }

  setPlaceholder(): void {
    if (this.video) {
      this.video.image.medium_url = "./assets/img/gb_placeholder.png";
    }
  }

  setVideoUrl() {
    if (this.video) {
      if (this.video.hd_url) {
        this.videoUrl = this.video.hd_url;
      } else if (this.video.high_url) {
        this.videoUrl = this.video.high_url;
      } else if (this.video.low_url) {
        this.videoUrl = this.video.low_url;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.setVideoUrl();
  }
}
