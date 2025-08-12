import * as z from "zod"
import { CompleteOrganization, RelatedOrganizationSchema, CompleteContract, RelatedContractSchema } from "./index"

export const EmployeeSchema = z.object({
  id: z.string(),
  employee_no: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  date_of_birth: z.string().datetime(),
  position: z.string(),
  organization_id: z.string(),
  created_at: z.string().datetime().nullish(),
  updated_at: z.string().datetime().nullish(),
})

export interface CompleteEmployee extends z.infer<typeof EmployeeSchema> {
  organization: CompleteOrganization
  contracts: CompleteContract[]
}

/**
 * RelatedEmployeeSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedEmployeeSchema: z.ZodSchema<CompleteEmployee> = z.lazy(() => EmployeeSchema.extend({
  organization: RelatedOrganizationSchema,
  contracts: RelatedContractSchema.array(),
}))
