const homeLocators = require('../locators/homeLocators');
class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://yantraias.com/auth/admin-login');
    await this.page.waitForLoadState('networkidle');    
  }

 
  async fillPhonenm(email) {
    await this.page.locator(homeLocators.emailInput).fill(email);
  }

  async fillPassword(password) {
    await this.page.locator(homeLocators.passwordInput).fill(password);

  }

  async clickSignIn() {
    await this.page.locator(homeLocators.signInButton).click();
    
  }

 
}

module.exports = HomePage;