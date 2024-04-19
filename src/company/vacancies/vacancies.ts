import {Component, OnInit} from '@angular/core';
import {VacanciesService, Vacancy} from "../../services/VacanciesService";
@Component({
  selector: 'app-company-vacancies',
  templateUrl: './vacancies.html',
  styleUrls: ['./vacancies.css']
})
export class CompanyVacanciesComponent implements OnInit {
  TitlesList: Vacancy[];

  ngOnInit(): void {

    console.info("test");
  }

  constructor(private service: VacanciesService) {
    this.TitlesList = service.List.filter((x) => x.show);
  }
}
