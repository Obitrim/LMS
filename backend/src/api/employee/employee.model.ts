import { ContractSchema, EmployeeSchema } from "@/common/lib/zod";
import { z } from "@/common/utils/zod.util";

export const CreateEmployeeSchema = z.object({
  body: z.intersection(
    EmployeeSchema.omit({
      id: true,
      employee_no: true,
    }),
    ContractSchema.omit({
      id: true,
      employee_id: true,
    })
  ),
});

export type CreateEmployeeDto = z.infer<typeof CreateEmployeeSchema>["body"];

export const UpdateEmployeeSchema = z.object({
  body: EmployeeSchema.omit({
    id: true,
    organization_id: true,
    employee_no: true,
  }),
});

export type UpdateEmployeeDto = z.infer<typeof UpdateEmployeeSchema>["body"];

export const DeleteEmployeeSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export type DeleteEmployeeDto = z.infer<typeof DeleteEmployeeSchema>["params"];
