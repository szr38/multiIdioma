import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dv-co',
  templateUrl: './dv-co.component.html',
  styleUrls: ['./dv-co.component.scss']
})
export class DvCoComponent implements OnInit {

  @Input() customNopeopleTpl: TemplateRef<any> 
  // @Input() customNopeopleTpl: any
  people: People[] = []

  constructor() {
   }

  ngOnInit(): void {
    // console.log('this.customNopeopleTpl: ',this.customNopeopleTpl)
  }

  pruebaMetodoHijo(){
    console.log('console.log desde el hijo')
  }
}

interface People {
  id: number,
  name: string
}