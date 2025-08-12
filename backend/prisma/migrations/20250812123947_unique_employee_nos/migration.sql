/*
  Warnings:

  - A unique constraint covering the columns `[employee_no]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Employee_employee_no_key" ON "public"."Employee"("employee_no");
