import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-pages-road',
  templateUrl: './road.html',
  styleUrls: ['./road.css']
})
export class RoadComponent {

  constructor(private location: Location) { }
  goBack() {
    this.location.back();
  }
}
