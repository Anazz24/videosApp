import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OMundoDosPequeninosPage } from './o-mundo-dos-pequeninos.page';

describe('OMundoDosPequeninosPage', () => {
  let component: OMundoDosPequeninosPage;
  let fixture: ComponentFixture<OMundoDosPequeninosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OMundoDosPequeninosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OMundoDosPequeninosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
