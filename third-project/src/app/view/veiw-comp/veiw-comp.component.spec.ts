import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwCompComponent } from './veiw-comp.component';

describe('VeiwCompComponent', () => {
  let component: VeiwCompComponent;
  let fixture: ComponentFixture<VeiwCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
