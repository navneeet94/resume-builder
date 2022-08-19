import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginDemoComponent } from './plugin-demo.component';

describe('PluginDemoComponent', () => {
  let component: PluginDemoComponent;
  let fixture: ComponentFixture<PluginDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
