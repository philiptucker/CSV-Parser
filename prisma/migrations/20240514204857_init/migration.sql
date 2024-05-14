/*
  Warnings:

  - Added the required column `userID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userID" VARCHAR(255) NOT NULL;
