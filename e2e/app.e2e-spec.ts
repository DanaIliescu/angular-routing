import { InternshipFormPage } from './app.po';

describe('internship-form App', function() {
  let page: InternshipFormPage;

  beforeEach(() => {
    page = new InternshipFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
