/*
  Warnings:

  - You are about to drop the column `fistName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `secondtName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "fistName",
DROP COLUMN "secondtName",
ADD COLUMN     "firstName" VARCHAR(255),
ADD COLUMN     "secondName" VARCHAR(255);
