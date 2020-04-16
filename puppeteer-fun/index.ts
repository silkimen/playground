/// <reference types="@types/puppeteer" />

import p from 'puppeteer-core';
import path from 'path';

(async() => {
  // const browser = await p.connect({
  //   browserURL: 'http://localhost:9222/'
  // });

  const browser = await p.launch({
    executablePath: path.join(__dirname, 'nwjs-sdk-v0.45.1-osx-x64/nwjs.app/Contents/MacOS/nwjs'),
    headless: false,
    args: ['--remote-debugging-port=9222'],
    ignoreDefaultArgs: true,
  });

  const page = (await browser.pages())[0];
  
  await page.goto('https://mobisys.com');
  await page.evaluate(() => { alert('Hello World!'); });
})();
