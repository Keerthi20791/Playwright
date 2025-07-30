// Download 
// Step by step
// 1. Launch the url
// 2. We have to wait for download event to appear on the page
// 3. Identify the element for the download
// 4. Click on the element to start download
// 5. Wait for the download to complete
// 6. use "path" library to create a path for the download folder
// 7. use "fs" library to save the file to the download folder
// 8. Save the downloaded file inside the download folder
// 9. Validate the document download is successful.


const {test, expect}  = require('@playwright/test')
// import {test, expect} from '@playwright/test'
const path = require('path')


test("Download File Hanlding", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("button#generateTxt").click()
    const downloadResult = page.waitForEvent('download') // pending
    await page.locator("a#txtDownloadLink").click()
    const download = await downloadResult

    const downloadDir = await path.join(__dirname, "../download")

    const fileName = await download.suggestedFilename()

    const filePath = await path.join(downloadDir, fileName)
    //console.log(filePath);

    await download.saveAs(filePath)
    await expect(filePath).toContain(fileName)

    // codegen
})