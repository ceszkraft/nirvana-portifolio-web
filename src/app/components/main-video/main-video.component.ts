import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})
export class MainVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  main_video: string = '../../../assets/main-video/Nirvana - You Know You\'re Right (LP Version) - YouTube.mkv'

}
