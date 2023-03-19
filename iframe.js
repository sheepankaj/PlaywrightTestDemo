const { webkit } = require('playwright');

(async ()=> {
    //function code
    //launching browser
    const browser = await webkit.launch({headless:false, slowMo:100});
    //creating a page inside browser
    const page = await browser.newPage();
    //navigating to the site
    await page.goto('https://demoqa.com/frames');

    const frame1 = await page.frame({url: /\/sample/});
    const heading1 = await frame1.$('h1');
    console.log(await heading1.innerText());

    //closing the browser
    await browser.close();
})();