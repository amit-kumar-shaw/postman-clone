import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBuilderComponent } from './request-builder.component';

describe('RequestBuilderComponent', () => {
  let component: RequestBuilderComponent;
  let fixture: ComponentFixture<RequestBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
