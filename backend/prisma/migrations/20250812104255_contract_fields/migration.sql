/*
  Warnings:

  - Added the required column `amount` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contract_type` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employee_no` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ContractType" AS ENUM ('PERMANENT', 'FIXED_TERM', 'TEMPORARY', 'INTERNSHIP');

-- CreateEnum
CREATE TYPE "public"."ContractStatus" AS ENUM ('ACTIVE', 'TERMINATED', 'EXPIRED', 'PENDING_SIGNATURE');

-- AlterTable
ALTER TABLE "public"."Contract" ADD COLUMN     "amount" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "contract_type" "public"."ContractType" NOT NULL,
ADD COLUMN     "file_url" TEXT,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "status" "public"."ContractStatus" NOT NULL DEFAULT 'PENDING_SIGNATURE';

-- AlterTable
ALTER TABLE "public"."Employee" ADD COLUMN     "employee_no" VARCHAR(20) NOT NULL;
