const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

const now = new Date();
const timestamp = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')}_${now.getHours().toString().padStart(2,'0')}-${now.getMinutes().toString().padStart(2,'0')}`;

const browserName = process.env.BROWSER || 'chromium';
const tagName = process.env.TAG || '@smoke';
const isHeadless = process.env.HEADLESS === 'yes';

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  grep: new RegExp(tagName.replace('@', '')),
  use: {
    headless: isHeadless,
    screenshot: { mode: 'on', fullPage: true },
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: browserName,
      use: browserName === 'chromium' ? { ...devices['Desktop Chrome'] } :
           browserName === 'firefox' ? { ...devices['Desktop Firefox'] } :
           { ...devices['Desktop Safari'] }
    }
  ],
  reporter: [['html', { outputFolder: `output/report-${timestamp}`, open: 'always', attachments: 'on' }]]
});