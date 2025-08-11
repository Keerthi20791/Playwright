// page.locator().setInputFiles([filePath, filePath2])
const {test, expect}  = require('@playwright/test')
const path = require('path')

test("File uploads handling", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles("path of the file")

    await page.locator("#filesToUpload").setInputFiles("C:/Users/prave/OneDrive - EduNexGen QA/Desktop/Notepad/Cypress.txt")

    await expect(page.locator("#fileList li")).toContainText("Cypress.txt")

})


test("Multiple Files uploads handling", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    const filePath1 = path.join(__dirname, "../TestData/Cypress.txt")
    const filePath2 = path.join(__dirname, "../TestData/Courses.txt")

    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").first()).toContainText("Cypress.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Courses.txt")

    await page.locator("#filesToUpload").setInputFiles([])

    await page.waitForTimeout(2000)

})
