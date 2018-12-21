import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErro404Component } from './pagina-erro404.component';

describe('PaginaErro404Component', () => {
  let component: PaginaErro404Component;
  let fixture: ComponentFixture<PaginaErro404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaErro404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaErro404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
