import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OCasteloAnimadoPage } from './o-castelo-animado.page';

describe('OCasteloAnimadoPage', () => {
  let component: OCasteloAnimadoPage;
  let fixture: ComponentFixture<OCasteloAnimadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OCasteloAnimadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OCasteloAnimadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
