import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCriterionComponent } from './success-criterion.component';

describe('SuccessCriterionComponent', () => {
  let component: SuccessCriterionComponent;
  let fixture: ComponentFixture<SuccessCriterionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessCriterionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessCriterionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
