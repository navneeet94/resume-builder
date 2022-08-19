import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResumeComponent } from './detail-resume.component';

describe('DetailResumeComponent', () => {
  let component: DetailResumeComponent;
  let fixture: ComponentFixture<DetailResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
