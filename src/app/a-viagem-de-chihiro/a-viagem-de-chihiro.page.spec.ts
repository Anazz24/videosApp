import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AViagemDeChihiroPage } from './a-viagem-de-chihiro.page';

describe('AViagemDeChihiroPage', () => {
  let component: AViagemDeChihiroPage;
  let fixture: ComponentFixture<AViagemDeChihiroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AViagemDeChihiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AViagemDeChihiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
