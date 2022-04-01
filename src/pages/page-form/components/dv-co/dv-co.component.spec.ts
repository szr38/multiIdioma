import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvCoComponent } from './dv-co.component';

describe('DvCoComponent', () => {
  let component: DvCoComponent;
  let fixture: ComponentFixture<DvCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DvCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DvCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
