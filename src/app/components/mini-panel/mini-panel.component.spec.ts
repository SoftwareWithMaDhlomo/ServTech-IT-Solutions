import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPanelComponent } from './mini-panel.component';

describe('MiniPanelComponent', () => {
  let component: MiniPanelComponent;
  let fixture: ComponentFixture<MiniPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
