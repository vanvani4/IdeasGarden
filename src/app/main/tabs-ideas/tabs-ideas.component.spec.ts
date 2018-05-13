import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsIdeasComponent } from './tabs-ideas.component';

describe('TabsIdeasComponent', () => {
  let component: TabsIdeasComponent;
  let fixture: ComponentFixture<TabsIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
