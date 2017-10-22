import { FormTemplatePage } from './app.po';

describe('form-template App', function() {
  let page: FormTemplatePage;

  beforeEach(() => {
    page = new FormTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
