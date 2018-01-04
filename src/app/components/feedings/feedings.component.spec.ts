import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingsComponent } from './feedings.component';

describe('FeedingsComponent', () => {
  let component: FeedingsComponent;
  let fixture: ComponentFixture<FeedingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
