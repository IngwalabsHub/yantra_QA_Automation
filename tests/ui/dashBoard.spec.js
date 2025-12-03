    const { test, expect } = require('@playwright/test');
const HomePage = require('../../src/ui/pages/HomePage');
const homeLocators = require('../../src/ui/locators/homeLocators');
require('dotenv').config();
test('Test case 1 DashBoard widget validation @dashboard', async ({ page }) => {
  const dashBoardPage = new DashBoardPage(page);
  

});