import { InitPage } from './app.po';

describe('init App', () => {
  let page: InitPage;

  beforeEach(() => {
    page = new InitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
