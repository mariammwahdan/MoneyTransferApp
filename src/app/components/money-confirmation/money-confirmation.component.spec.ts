import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyConfirmationComponent } from './money-confirmation.component';

describe('MoneyConfirmationComponent', () => {
  let component: MoneyConfirmationComponent;
  let fixture: ComponentFixture<MoneyConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
