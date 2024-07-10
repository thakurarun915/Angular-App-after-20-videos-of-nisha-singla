import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponyComponent } from './compony.component';

describe('ComponyComponent', () => {
  let component: ComponyComponent;
  let fixture: ComponentFixture<ComponyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
