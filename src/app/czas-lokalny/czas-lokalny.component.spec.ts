import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzasLokalnyComponent } from './czas-lokalny.component';

describe('CzasLokalnyComponent', () => {
  let component: CzasLokalnyComponent;
  let fixture: ComponentFixture<CzasLokalnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzasLokalnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzasLokalnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
