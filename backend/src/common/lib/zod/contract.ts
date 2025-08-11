import * as z from "zod"
import { CompleteEmployee, RelatedEmployeeSchema, CompleteOrganization, RelatedOrganizationSchema } from "./index"

export const ContractSchema = z.object({
  id: z.string(),
  start_date: z.date(),
  end_date: z.date().nullish(),
  employee_id: z.string(),
  organization_id: z.string(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
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
