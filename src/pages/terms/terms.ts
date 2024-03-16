import {Component} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-pages-terms',
  templateUrl: './terms.html',
  styleUrls: ['./terms.css']
})
export class TermsComponent {

  constructor(private location: Location) { }
  goBack() {
    this.location.back();
  }
}
