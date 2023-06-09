const { chromium } = require('playwright');

(async ()=> {
    //function code
    const browser = await chromium.launch({headless:false, slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    //code to type in the email textbox field
    const email = await page.$('#email');
    await email.type('test@test.com',{delay: 50});

    await browser.close();
})();