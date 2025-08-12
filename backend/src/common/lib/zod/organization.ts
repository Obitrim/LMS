import * as z from "zod"
import { OnboardingStatus } from "../prisma"
import { CompleteEmployee, RelatedEmployeeSchema, CompleteUser, RelatedUserSchema, CompleteContract, RelatedContractSchema } from "./index"

export const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  country: z.string().nullish(),
  city: z.string().nullish(),
  zip: z.string().nullish(),
  status: z.nativeEnum(OnboardingStatus),
  created_at: z.string().datetime().nullish(),
  updated_at: z.string().datetime().nullish(),
})

export interface CompleteOrganization extends z.infer<typeof OrganizationSchema> {
  employees: CompleteEmployee[]
  users: CompleteUser[]
  contracts: CompleteContract[]
}

/**
 * RelatedOrganizationSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrganizationSchema: z.ZodSchema<CompleteOrganization> = z.lazy(() => OrganizationSchema.extend({
  employees: RelatedEmployeeSchema.array(),
  users: RelatedUserSchema.array(),
  contracts: RelatedContractSchema.array(),
}))
