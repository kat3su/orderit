import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderingComponent } from './product-ordering.component';

describe('ProductOrderingComponent', () => {
  let component: ProductOrderingComponent;
  let fixture: ComponentFixture<ProductOrderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOrderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
