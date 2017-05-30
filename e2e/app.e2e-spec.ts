import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Car Assistant';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h3')).getText()).toEqual(expectedMsg);
  });

});
