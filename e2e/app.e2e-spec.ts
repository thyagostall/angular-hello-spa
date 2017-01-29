import { HelloSpaPage } from './app.po';

describe('hello-spa App', function() {
  let page: HelloSpaPage;

  beforeEach(() => {
    page = new HelloSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
