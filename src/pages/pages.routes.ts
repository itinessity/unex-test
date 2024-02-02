import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageComponent} from "./main/page.component";
import {HomeComponent} from "./home/home.component";

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
      ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
