import contactPage from "../pages/contact-page.js";
import {faker} from '@faker-js/faker';
import allureReporter from '@wdio/allure-reporter';

describe('Contact', () => {
    it('Fill all the input fields, submit form & assert success message', async () => {
        allureReporter.addFeature('Contact');
        await contactPage.open();

        // Fill out all inputs & submit form
        await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraph(2));

        // Assert the success message
        const successAlert = contactPage.alertSuccess;
        await expect(successAlert).toHaveText(expect.stringContaining('Thanks for contacting us! We will be in touch with you shortly'));
    });
});