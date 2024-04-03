import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFitComponent } from './my-fit.component';

describe('MyFitComponent', () => {
  let component: MyFitComponent;
  let fixture: ComponentFixture<MyFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
