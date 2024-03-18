import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageComponent} from "../pages/main/page.component";
import {CompanyComponent} from "../company/company.component";

export  const routes: Routes =
  [
    {
      path: '', component: PageComponent,
    },
    {
      path: 'company', component: CompanyComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false , anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
