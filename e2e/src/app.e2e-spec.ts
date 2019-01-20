import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title in header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Render an arbitrary deeply nested object');
  });
});
