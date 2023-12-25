const { test, expect } = require('@playwright/test');
const {SellPage}= require("../pageobjects/SellPage");
const {AppointmentPage}= require("../pageobjects/AppointmentPage");
const stringData = JSON.stringify(require("../utils/testdata.json"));
const selldata = JSON.parse(stringData);


test('@Web Auto Verkauf Test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const sellpage = new SellPage(page);
    await page.goto("https://www.autoscout24.de/auto-verkaufen/");
    //const framePage= page.frameLocator("//iframe[@name='__tcfapiLocator']");
 
    await sellpage.enterCarDetails(page, selldata);
   
    await page.waitForLoadState('networkidle')
    const averagePrice = await page.locator("//b[@class='AveragePriceEstimationBlock_averagePriceEstimation__text_price__S46kZ']").textContent();
    const sellingPrice = Number(averagePrice.split("€").at(2));

    console.log(sellingPrice);
    if (sellingPrice > Number(selldata.expectedPreise)){
        console.log("You can sell");
        const pagePromise = context.waitForEvent('page');
        await page.getByRole('link', { name: 'Termin vereinbaren' }).click();
        const newPage = await pagePromise;
        await newPage.waitForLoadState();
        console.log(await newPage.title());
        const appointmentPage = new AppointmentPage(newPage);
        await appointmentPage.enterAppointmentDetails(selldata);
        expect (await newPage.getByText('Glückwunsch:').isVisible());
        await expect(newPage).toHaveScreenshot();
        //await newPage.screenshot({ path: 'screenshot.png', fullPage: true });

    }
    else
        console.log("Dont sell");
    //await page.getByText('Durchschnittlicher').click();

    //await page.pause();
})


test('@Web AutoScout24', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const sellpage = new SellPage(page);
    await page.goto("https://www.autoscout24.de/auto-verkaufen/");
    //const framePage= page.frameLocator("//iframe[@name='__tcfapiLocator']");
 
})




