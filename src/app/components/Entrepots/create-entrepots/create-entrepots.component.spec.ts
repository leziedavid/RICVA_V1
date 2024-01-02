import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntrepotsComponent } from './create-entrepots.component';

describe('CreateEntrepotsComponent', () => {
  let component: CreateEntrepotsComponent;
  let fixture: ComponentFixture<CreateEntrepotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEntrepotsComponent]
    });
    fixture = TestBed.createComponent(CreateEntrepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
