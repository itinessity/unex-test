import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CompanyComponent} from "./company.component";
import {CompanyMainComponent} from "./main/main";
import {CompanyVacanciesComponent} from "./vacancies/vacancies";
import {ItemVacanciesComponent} from "./vacancies/item";

export const routes: Routes =
  [
    {
      path: 'company', component: CompanyComponent,
      children: [
        {
          path: '', component: CompanyMainComponent,
        },
        {
          path: 'roles', component: CompanyVacanciesComponent,
        },
        {
          path: 'roles/:key', component: ItemVacanciesComponent,
        },
      ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
