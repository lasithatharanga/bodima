import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.page.html',
  styleUrls: ['./resource.page.scss'],
})
export class ResourcePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pager: true
  };
  constructor() { }

  ngOnInit() {
  }

}
