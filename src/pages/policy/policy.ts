import {Component} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pages-policy',
  templateUrl: './policy.html',
  styleUrls: ['./policy.css']
})
export class PolicyComponent {

  constructor(private location: Location) { }
  goBack() {
    this.location.back();
  }
}
