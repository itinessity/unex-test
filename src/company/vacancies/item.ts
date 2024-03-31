import {Component, OnInit} from '@angular/core';
import {VacanciesService, Vacancy} from "../../services/VacanciesService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-vacancies-item',
  templateUrl: './item.html',
  styleUrls: ['./item.css', "./vacancies.css"]
})
export class ItemVacanciesComponent implements OnInit {

  activatedRoute: ActivatedRoute;
  vacancyItem: Vacancy;

  ngOnInit(): void {

  }

  constructor(route: ActivatedRoute, private service: VacanciesService) {
    this.activatedRoute = route;
    const key = this.activatedRoute.snapshot.params['key'];
    this.vacancyItem = service.List[service.List.findIndex(x => x.key === key)];
  }

}
