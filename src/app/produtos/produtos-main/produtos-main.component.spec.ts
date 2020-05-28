import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosMainComponent } from './produtos-main.component';

describe('ProdutosMainComponent', () => {
  let component: ProdutosMainComponent;
  let fixture: ComponentFixture<ProdutosMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
