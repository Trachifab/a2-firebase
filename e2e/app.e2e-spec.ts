import { A2FirebasePage } from './app.po';

describe('a2-firebase App', function() {
  let page: A2FirebasePage;

  beforeEach(() => {
    page = new A2FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
