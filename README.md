
When creating the database schema I used prisma to create the schema as that was what I was most familiar with, I created a User model using the same headings(aside from index as that was replaced with id) as the csv file.

As for the parser I created a user type that matched the headings of the csv file, then I used csv-parse to parse through the csv file, creating a list of users. I then iterated through said list and used prisma to create database entries for each item in the user list.