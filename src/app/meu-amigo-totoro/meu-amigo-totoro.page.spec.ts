import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeuAmigoTotoroPage } from './meu-amigo-totoro.page';

describe('MeuAmigoTotoroPage', () => {
  let component: MeuAmigoTotoroPage;
  let fixture: ComponentFixture<MeuAmigoTotoroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuAmigoTotoroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeuAmigoTotoroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
