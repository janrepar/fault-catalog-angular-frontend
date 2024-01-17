import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSuccessCriterionComponent } from './single-success-criterion.component';

describe('SingleSuccessCriterionComponent', () => {
  let component: SingleSuccessCriterionComponent;
  let fixture: ComponentFixture<SingleSuccessCriterionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSuccessCriterionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleSuccessCriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
