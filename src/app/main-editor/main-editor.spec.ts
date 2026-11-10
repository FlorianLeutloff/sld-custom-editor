import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainEditor } from './main-editor';

describe('MainEditor', () => {
  let component: MainEditor;
  let fixture: ComponentFixture<MainEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEditor],
    }).compileComponents();

    fixture = TestBed.createComponent(MainEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
