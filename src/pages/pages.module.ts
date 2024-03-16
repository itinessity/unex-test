import {NgModule} from "@angular/core";
import {PageComponent} from "./main/page.component";
import {PagesRoutingModule} from "./pages.routes";
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {HeadComponent} from "./head/head.component";
import {FootComponent} from "./foot/foot.component";
import {MatButton} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDivider} from "@angular/material/divider";
import {TermsComponent} from "./terms/terms";
import {PolicyComponent} from "./policy/policy";
import {SubcribeComponent} from "./subscribes/subcribe";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    MenuComponent,
    HeadComponent,
    FootComponent,
    TermsComponent,
    PolicyComponent,
    SubcribeComponent
    ],
  imports: [
    PagesRoutingModule,
    ReactiveFormsModule,
    MatButton,
    MatMenuModule,
    MatDivider,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }

