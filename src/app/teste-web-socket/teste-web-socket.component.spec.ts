import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteWebSocketComponent } from './teste-web-socket.component';

describe('TesteWebSocketComponent', () => {
  let component: TesteWebSocketComponent;
  let fixture: ComponentFixture<TesteWebSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteWebSocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteWebSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
