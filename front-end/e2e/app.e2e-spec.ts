import { AnimeFrontEndPage } from './app.po';

describe('anime-front-end App', () => {
  let page: AnimeFrontEndPage;

  beforeEach(() => {
    page = new AnimeFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
