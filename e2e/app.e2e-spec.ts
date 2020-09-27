import { VenusTemplatePage } from './app.po';

describe('Venus App', function() {
  let page: VenusTemplatePage;

  beforeEach(() => {
    page = new VenusTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
