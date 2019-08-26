import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeExplorerComponent } from './maze-explorer.component';

describe('MazeExplorerComponent', () => {
  let component: MazeExplorerComponent;
  let fixture: ComponentFixture<MazeExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazeExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
