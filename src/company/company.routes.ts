import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CompanyComponent} from "./company.component";
import {CompanyMainComponent} from "./main/main";
import {CompanyVacanciesComponent} from "./vacancies/vacancies";

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
      ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
