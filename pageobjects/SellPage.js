class SellPage
 {


constructor (page)
{
    this.page=page;
   
}


async enterCarDetails(page, selldata)
{

    await page.locator("//button[text()='Alle akzeptieren']").click();
    await page.getByPlaceholder('Marke').click();
    await page.getByRole('option', { name: selldata.brand }).click();
    await page.getByPlaceholder('Model').click();
    await page.getByRole('option', { name: selldata.model }).click();
    await page.locator('div').filter({ hasText: /^Jahr$/ }).locator('div').getByRole('button').click();
    await page.getByRole('option', { name: selldata.year }).click();
    await page.getByRole('button', { name: 'chevron-icon' }).click();
    await page.getByRole('option', { name: selldata.month }).click();
    await page.getByPlaceholder('Kraftstoff').click();
    await page.getByRole('option', { name: selldata.kraftstoff }).click();
    await page.getByPlaceholder('Ausstattungslinie').click();
    await page.getByRole('option', { name: selldata.ausstatung }).click();
    await page.getByPlaceholder('Kilometerstand').click();
    await page.getByPlaceholder('Kilometerstand').fill(selldata.km);
    await page.getByTestId('unified-form-submit').click();


}


 }

 module.exports = {SellPage};