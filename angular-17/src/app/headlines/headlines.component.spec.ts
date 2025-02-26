import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinesComponent } from './headlines.component';

describe('HeadlinesComponent', () => {
  let component: HeadlinesComponent;
  let fixture: ComponentFixture<HeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadlinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
