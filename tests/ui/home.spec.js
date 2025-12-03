const { test, expect } = require('@playwright/test');
const HomePage = require('../../src/ui/pages/HomePage');
const homeLocators = require('../../src/ui/locators/homeLocators');
const loginData = require('../../src/ui/testdata/login.json');
require('dotenv').config();
test('Test case 1 User Login - Valid credentials should login successfully @smoke', async ({ page }) => {
  const homePage = new HomePage(page);
  //const loginData = (await ExcelReader.getLoginData())[0];
  
  await test.step('Navigate to login page', async () => {
    await homePage.navigate();
  });
    
  await test.step('Enter Phone Number', async () => {
    await homePage.fillPhonenm(loginData.phno);
  });
  
  await test.step('Enter password', async () => {
    await homePage.fillPassword(loginData.password);
  });
  
  await test.step('Click sign in button', async () => {
    await homePage.clickSignIn();
  });
});
test('Test case 2 @regression', async ({ page }) => {
  await test.step('just for understand 2', async () => {
   console.log("This is test case 2")
  });
 });

 /* test('Test case 3 @smoke', async ({ page }) => {
    await test.step('just for understand 3', async () => {
     console.log("This is test case 3")
    });
  
  });*/