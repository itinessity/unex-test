import {NgModule} from "@angular/core";
import {PageComponent} from "./main/page.component";
import {PagesRoutingModule} from "./pages.routes";
import {HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {HeadComponent} from "./head/head.component";
import {FootComponent} from "./foot/foot.component";
import {MatButton} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    MenuComponent,
    HeadComponent,
    FootComponent
    ],
  imports: [
    PagesRoutingModule,
    MatButton,
    MatMenuModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }

