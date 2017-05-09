import { HhwtdemoPage } from './app.po';

describe('hhwtdemo App', function() {
  let page: HhwtdemoPage;

  beforeEach(() => {
    page = new HhwtdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
