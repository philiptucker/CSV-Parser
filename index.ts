import * as fs from "fs"
import * as path from "path"
import { parse } from 'csv-parse'

type user = {
  "Index": number,
  "User Id": string,
  "First Name": string,
  "Last Name": string,
  "Sex": string,
  "Email": string,
  "Phone": string,
  "Date of Birth": string,
  "Job Title": string
}

(() => {
  const csvFilePath = path.resolve(__dirname, 'people-100000.csv')

  const headers = [
    'Index', 
    'User Id', 
    'First Name', 
    'Last Name', 
    'Sex',
    'Email', 
    'Phone',
    'Date of Birth',
    'Job Title'
  ]

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8'})

  parse(fileContent, {
    delimiter: ',',
    columns: headers,
  }, (error, result: user[]) => {
    if (error) {
      console.error(error)
    }
    console.log("Result", result)
  })

})();