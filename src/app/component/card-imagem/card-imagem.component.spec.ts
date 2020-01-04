import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImagemComponent } from './card-imagem.component';

describe('CardImagemComponent', () => {
  let component: CardImagemComponent;
  let fixture: ComponentFixture<CardImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
