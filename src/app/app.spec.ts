import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let app: App;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [App] });
    app = TestBed.createComponent(App).componentInstance;
  });

  it('debería crear el componente principal', () => {
    expect(app).toBeTruthy();
  });

  it(`debería tener el título 'RemindMe'`, () => {
    expect(app.title).toEqual('RemindMe');
  });
});
