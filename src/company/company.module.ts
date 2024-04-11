import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDivider} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CompanyComponent} from "./company.component";
import {CompanyRoutingModule} from "./company.routes";
import {CompanyFootComponent} from "./foot/company.foot";
import {CompanyMenuComponent} from "./menu/company.menu";
import {CompanyMainComponent} from "./main/main";
import {CompanyVacanciesComponent} from "./vacancies/vacancies";
import {CompanyContactsComponent} from "./contacts/contacts";
import {ItemVacanciesComponent} from "./vacancies/item";
import {CommonModule} from "@angular/common";
import {PagesModule} from "../pages/pages.module";

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFootComponent,
    CompanyMenuComponent,
    CompanyMainComponent,
    CompanyVacanciesComponent,
    CompanyContactsComponent,
    ItemVacanciesComponent
  ],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        ReactiveFormsModule,
        MatButton,
        MatMenuModule,
        MatDivider,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        PagesModule,
    ],
  providers: [],
  bootstrap: []
})

export class CompanyModule { }
