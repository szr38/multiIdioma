import { Component, OnInit, ViewChild } from '@angular/core';
import { DvCoComponent } from './components/dv-co/dv-co.component';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.scss']
})
export class PageFormComponent implements OnInit {

  @ViewChild('prueba') temp:DvCoComponent

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.temp.pruebaMetodoHijo()
  }

  metodoPrueba(){
    console.log('consola desde el padre')
  }

}
