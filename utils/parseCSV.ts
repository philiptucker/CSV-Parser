import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import user from '../types/user';
import prisma from '../prisma';


const parseCSVFile = () => {
  const csvFilePath = path.resolve(__dirname, 'people-100000.csv')
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8'})

  const headers = [
    'index', 
    'userID', 
    'firstName', 
    'lastName', 
    'sex',
    'email', 
    'phone',
    'DOB',
    'jobTitle'
  ]

  parse(fileContent, {delimiter: ',', columns: headers}, async (error, result: user[]) => {
    if (error) {
      console.error(error)
    }


    for (let i = 1; i < result.length; i++){
      const user = result[i]

      const { 
        index,
        userID, 
        firstName, 
        lastName, 
        sex, 
        email, 
        phone, 
        DOB, 
        jobTitle 
      } = user


      const addUser = await prisma.user.create({
        data: {
          userID,
          firstName,
          lastName,
          sex,
          email,
          phone,
          DOB,
          jobTitle
        }
      })

    }
  })

};

export default parseCSVFile;