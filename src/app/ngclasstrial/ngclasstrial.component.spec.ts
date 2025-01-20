import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclasstrialComponent } from './ngclasstrial.component';

describe('NgclasstrialComponent', () => {
  let component: NgclasstrialComponent;
  let fixture: ComponentFixture<NgclasstrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgclasstrialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclasstrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
