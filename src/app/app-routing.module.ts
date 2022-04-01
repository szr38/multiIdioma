import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFormComponent } from 'src/pages/page-form/page-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form',  component:PageFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
