import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIdeaComponent } from './search-idea.component';

describe('SearchIdeaComponent', () => {
  let component: SearchIdeaComponent;
  let fixture: ComponentFixture<SearchIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
