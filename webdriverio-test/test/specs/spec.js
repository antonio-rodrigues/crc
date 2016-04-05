var assert = require('assert');

describe('webdriver.io page', function () {
  it('should have the right title - the fancy generator way', function () {
    browser.url('http://localhost:3000/#/files/dev');
    var title = browser.getTitle();
    assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });
});