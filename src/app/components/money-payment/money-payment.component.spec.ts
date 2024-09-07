import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyPaymentComponent } from './money-payment.component';

describe('MoneyPaymentComponent', () => {
  let component: MoneyPaymentComponent;
  let fixture: ComponentFixture<MoneyPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
