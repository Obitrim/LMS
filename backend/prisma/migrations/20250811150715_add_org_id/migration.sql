/*
  Warnings:

  - Added the required column `organization_id` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Contract" ADD COLUMN     "organization_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "organization_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Contract" ADD CONSTRAINT "Contract_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "public"."Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
