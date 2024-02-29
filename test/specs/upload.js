import path from 'path';
import { fileURLToPath } from 'url';

describe('Upload test', () => {
    it('Simple upload test', async () => {
        // open URL
        await browser.url('https://the-internet.herokuapp.com/upload');

        // store test file path
        const __filename = fileURLToPath(import.meta.url);
        const filePath = path.join(path.dirname(__filename), '../data/image.png');

        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        // assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });

    it.only('Upload on a hidden input field', async () => {
        // open URL
        await browser.url('/cart/');

        // store test file path
        const __filename = fileURLToPath(import.meta.url);
        const filePath = path.join(path.dirname(__filename), '../data/image.png');

        // upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className=''");

        // set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();

        // assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
    });
});