import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEntrepotsComponent } from './show-entrepots.component';

describe('ShowEntrepotsComponent', () => {
  let component: ShowEntrepotsComponent;
  let fixture: ComponentFixture<ShowEntrepotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowEntrepotsComponent]
    });
    fixture = TestBed.createComponent(ShowEntrepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
