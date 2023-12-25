class AppointmentPage {


    constructor(page) {
        this.page = page;

    }


    async enterAppointmentDetails(selldata) {

        await this.page.locator('#car-state').getByAltText('chevron').click();
        await this.page.getByText('1. Wie neu', { exact: true }).click();
        await this.page.locator('#car-damage > .Selector__control > .Selector__indicators > .Selector__indicator').click();
        await this.page.getByText('Keine Schäden und keine').click();
        await this.page.getByPlaceholder('Bitte PLZ eingeben').click();
        await this.page.getByPlaceholder('Bitte PLZ eingeben').fill('70619');
        await this.page.getByText('70619 Stuttgart').click();
        await this.page.locator('#price-expectation').click();
        await this.page.locator('#price-expectation').fill('3.4000  €');
        await this.page.getByRole('button', { name: 'Weiter' }).click();
        
    }


}

module.exports = { AppointmentPage };