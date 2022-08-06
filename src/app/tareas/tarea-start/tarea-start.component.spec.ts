import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaStartComponent } from './tarea-start.component';

describe('TareaStartComponent', () => {
  let component: TareaStartComponent;
  let fixture: ComponentFixture<TareaStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
