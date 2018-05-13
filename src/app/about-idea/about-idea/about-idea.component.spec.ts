import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIdeaComponent } from './about-idea.component';

describe('AboutIdeaComponent', () => {
  let component: AboutIdeaComponent;
  let fixture: ComponentFixture<AboutIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
