import { Ta4kiPage } from './app.po';

describe('ta4ki App', () => {
  let page: Ta4kiPage;

  beforeEach(() => {
    page = new Ta4kiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
