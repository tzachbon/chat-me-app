import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonLoaderComponent } from './polygon-loader.component';

describe('PolygonLoaderComponent', () => {
  let component: PolygonLoaderComponent;
  let fixture: ComponentFixture<PolygonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
