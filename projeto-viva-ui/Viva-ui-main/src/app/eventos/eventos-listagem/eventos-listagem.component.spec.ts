import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosListagemComponent } from './eventos-listagem.component';

describe('EventosListagemComponent', () => {
  let component: EventosListagemComponent;
  let fixture: ComponentFixture<EventosListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
