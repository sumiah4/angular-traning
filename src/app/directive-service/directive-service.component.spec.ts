import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveServiceComponent } from './directive-service.component';

describe('DirectiveServiceComponent', () => {
  let component: DirectiveServiceComponent;
  let fixture: ComponentFixture<DirectiveServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectiveServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
