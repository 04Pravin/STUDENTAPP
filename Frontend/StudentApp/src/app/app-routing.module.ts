import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailviewComponent } from './components/detailview/detailview.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { TableViewComponent } from './components/table-view/table-view.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,pathMatch:'full'},
  {path:'detail/:id',component:DetailviewComponent},
  {path:'add',component:AddFormComponent},
  {path:'table',component:TableViewComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
