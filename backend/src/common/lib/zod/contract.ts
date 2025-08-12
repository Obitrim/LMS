import * as z from "zod"
import { Decimal } from "decimal.js"
import { ContractType, ContractStatus } from "../prisma"
import { CompleteEmployee, RelatedEmployeeSchema, CompleteOrganization, RelatedOrganizationSchema } from "./index"

// Helper schema for Decimal fields
z
  .instanceof(Decimal)
  .or(z.string())
  .or(z.number())
  .refine((value) => {
    try {
      return new Decimal(value)
    } catch (error) {
      return false
    }
  })
  .transform((value) => new Decimal(value))

export const ContractSchema = z.object({
  id: z.string(),
  start_date: z.string().datetime(),
  end_date: z.string().datetime().nullish(),
  contract_type: z.nativeEnum(ContractType),
  position: z.string(),
  amount: z.number(),
  file_url: z.string().nullish(),
  employee_id: z.string(),
  organization_id: z.string(),
  status: z.nativeEnum(ContractStatus),
  created_at: z.string().datetime().nullish(),
  updated_at: z.string().datetime().nullish(),
})

export interface CompleteContract extends z.infer<typeof ContractSchema> {
  employee: CompleteEmployee
  organization: CompleteOrganization
}

/**
 * RelatedContractSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedContractSchema: z.ZodSchema<CompleteContract> = z.lazy(() => ContractSchema.extend({
  employee: RelatedEmployeeSchema,
  organization: RelatedOrganizationSchema,
}))
