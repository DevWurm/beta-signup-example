import { BetaSignupExamplePage } from './app.po';

describe('beta-signup-example App', function() {
  let page: BetaSignupExamplePage;

  beforeEach(() => {
    page = new BetaSignupExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
