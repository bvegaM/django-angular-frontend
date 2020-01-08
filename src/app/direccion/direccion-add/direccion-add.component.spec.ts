import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionAddComponent } from './direccion-add.component';

describe('DireccionAddComponent', () => {
  let component: DireccionAddComponent;
  let fixture: ComponentFixture<DireccionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
