import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaavBarComponent } from './nav-bar.component';

describe('NaavBarComponent', () => {
  let component: NaavBarComponent;
  let fixture: ComponentFixture<NaavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
