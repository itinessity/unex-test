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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";
import {RoadComponent} from "./roadmap/road";

@NgModule({
    declarations: [
        PageComponent,
        HomeComponent,
        MenuComponent,
        HeadComponent,
        FootComponent,
        TermsComponent,
        PolicyComponent,
        SubcribeComponent,
        RoadComponent
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
    MatProgressSpinner,
    NgIf,
  ],
    providers: [],
    exports: [
        FootComponent
    ],
    bootstrap: []
})
export class PagesModule { }

