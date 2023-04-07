import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecongCompComponent } from './secong-comp.component';

describe('SecongCompComponent', () => {
  let component: SecongCompComponent;
  let fixture: ComponentFixture<SecongCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecongCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecongCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
