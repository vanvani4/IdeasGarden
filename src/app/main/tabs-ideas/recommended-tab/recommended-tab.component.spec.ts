import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedTabComponent } from './recommended-tab.component';

describe('RecommendedTabsComponent', () => {
  let component: RecommendedTabComponent;
  let fixture: ComponentFixture<RecommendedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
