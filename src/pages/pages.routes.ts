import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageComponent} from "./main/page.component";
import {HomeComponent} from "./home/home.component";
import {PolicyComponent} from "./policy/policy";
import {TermsComponent} from "./terms/terms";
import {SubcribeComponent} from "./subscribes/subcribe";

export const routes: Routes =
  [
    {
      path: '', component: PageComponent,
      children: [
        {
          path: '', component: HomeComponent,
        },
        {
          path: 'home', component: HomeComponent,
        },
        {
          path: 'policy', component: PolicyComponent,
        },
        {
          path: 'terms', component: TermsComponent,
        },
        {
          path: 'subscribe', component: SubcribeComponent,
        },
      ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
