// How to work with excel 

// 1. Install a package 'xlsx' - npm install 'xlsx'
// 2. Import the package 'xlsx' - const xlsx = require('xlsx')
// 3. Read the file - const workbook = xlsx.readFile("pathofthefile")
// 4. Get the sheet - const sheet = workbook.Sheets[sheetName]
// 5. Convert the excel data into the json - const data = xlsx.sheet_to_json(sheet)
// 6. return the data from the function

const xlsx = require('xlsx')

class ExcelUtils{

    static getDataFromExcel(filePath, sheetName){

        // Exception Handling
        try{

        }
        catch(msg){
            console.log(msg);
        }

    }

}

// Tagging a test case  - smoke, regression
// 