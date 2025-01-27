const {test,expect}= require('@playwright/test');

test('firstplaywright',async ({page}) =>
     {
        await page.goto('https://app.keygen.sh/login') ;
        function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
      }
      //login
       await page.click('[href="/register"]');
       await page.fill('//input[@name="email"]','ashu@gmail.com');
       await page.fill('//input[@name="password"]','Aswini@413');
      const elements =page.locator('select');
       elements.selectOption({value:"220111db-56ba-4db2-a932-94a65777c8d5"});
       await page.click('//button[@type="submit"]');
       //Dashboard
       await page.click('//button[@class="kg-modal__close-button"]');
       const element=await page.locator('//h1[@class="header"]');
       await expect(element).toContainText('Dashboard');
       //products
       await page.click('//a[@href="/products"]');
       await page.click('//a[@href="/products/new"]');
       await delay(1000);
       await page.fill('#name','ashu');
       await page.fill('#code','ashu');
       const dropdown=await page.locator('//select');
        dropdown.selectOption({value:"OPEN"});
       await page.click('//button[@type="submit"]');
       await delay(1000);
       await page.click('//button[@class="resource-links__link resource-links__link--size-small"]');
       await page.fill('//input[@class="kg-modal__confirmation-input ember-text-field ember-view"]','ashu');
       await page.click('//button[@class="kg-modal__confirm-button"]');
       await delay(1000);
      //users
       await page.click('//a[@href="/users"]');
       await page.click('//a[@href="/users/new"]');
       await delay(1000);
       await page.fill('#firstName','ashu');
       await page.fill('#lastName','ash');
       await page.fill('#email','ash@gmail.com');
       await page.fill('#password','ash@413');
       await page.locator('//div[@data-ebd-id="ember3181-trigger"]');
       await page.locator('//span[@class="ember-power-select-selected-item"');
       await page.click('//button[@type="submit"]');
       await delay(1000);
       await page.click('//button[@class="resource-links__link resource-links__link--size-small"]');
       await page.fill('//input[@class="kg-modal__confirmation-input ember-text-field ember-view"]','ash@gmail.com');
       await page.click('//button[@class="kg-modal__confirm-button"]');
       await delay(1000);
       }
      )