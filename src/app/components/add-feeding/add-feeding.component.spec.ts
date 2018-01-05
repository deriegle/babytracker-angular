import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedingComponent } from './add-feeding.component';

describe('AddFeedingComponent', () => {
  let component: AddFeedingComponent;
  let fixture: ComponentFixture<AddFeedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
