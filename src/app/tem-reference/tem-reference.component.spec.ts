import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemReferenceComponent } from './tem-reference.component';

describe('TemReferenceComponent', () => {
  let component: TemReferenceComponent;
  let fixture: ComponentFixture<TemReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
