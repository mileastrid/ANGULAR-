import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonmodalComponent } from './buttonmodal.component';

describe('ButtonmodalComponent', () => {
  let component: ButtonmodalComponent;
  let fixture: ComponentFixture<ButtonmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
