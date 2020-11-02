import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadiobaseComponent } from './components/radiobase/radiobase.component';

const routes: Routes = [
  { path: 'radiobases', component: RadiobaseComponent },
  { path: '', redirectTo: '/radiobases', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
