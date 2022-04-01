import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvCoComponent } from './page-form/components/dv-co/dv-co.component';
import { PageFormComponent } from './page-form/page-form.component';



@NgModule({
  declarations: [
    PageFormComponent,
    DvCoComponent,
  ],
  imports: [
    
    CommonModule,
  ]
})
export class PagesModule { }
