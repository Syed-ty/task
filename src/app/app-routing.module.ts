import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusableComponent } from './shared/reusable/reusable.component';

const routes: Routes = [
 {
  path:'',
  redirectTo:'reusable',
  pathMatch:'full'
 },
 {path:'reusable', component:ReusableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
