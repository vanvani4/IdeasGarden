import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeasTabComponent } from './new-ideas-tab.component';

describe('NewIdeasTabComponent', () => {
  let component: NewIdeasTabComponent;
  let fixture: ComponentFixture<NewIdeasTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIdeasTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIdeasTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
