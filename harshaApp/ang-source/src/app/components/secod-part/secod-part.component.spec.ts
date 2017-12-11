import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecodPartComponent } from './secod-part.component';

describe('SecodPartComponent', () => {
  let component: SecodPartComponent;
  let fixture: ComponentFixture<SecodPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecodPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecodPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
