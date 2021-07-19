import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsSelectedPaneComponent } from './shows-selected-pane.component';

describe('ShowsSelectedPaneComponent', () => {
  let component: ShowsSelectedPaneComponent;
  let fixture: ComponentFixture<ShowsSelectedPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsSelectedPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsSelectedPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
