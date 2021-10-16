import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlacesComponent } from './add-edit-places.component';

describe('AddEditPlacesComponent', () => {
  let component: AddEditPlacesComponent;
  let fixture: ComponentFixture<AddEditPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
