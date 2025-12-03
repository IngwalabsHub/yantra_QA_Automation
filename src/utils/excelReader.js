const ExcelJS = require('exceljs');
const path = require('path');

class ExcelReader {
  static async readExcelData(filePath, sheetName) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName);
    const data = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) {
        data.push({
          email: row.getCell(1).value,
          password: row.getCell(2).value
        });
      }
    });
    return data;
  }

  static async getLoginData() {
    const excelPath = path.join(__dirname, '../ui/testdata/ingexceldata.xlsx');
    return await this.readExcelData(excelPath, 'logi_input');
  }
}

module.exports = ExcelReader;