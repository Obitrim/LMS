import * as z from "zod"
import { Role } from "../prisma"
import { CompleteOrganization, RelatedOrganizationSchema } from "./index"

export const UserSchema = z.object({
  id: z.string(),
  profile_id: z.string().nullish(),
  email: z.string(),
  password: z.string(),
  role: z.nativeEnum(Role),
  organization_id: z.string(),
  created_at: z.string().datetime().nullish(),
  updated_at: z.string().datetime().nullish(),
})

export interface CompleteUser extends z.infer<typeof UserSchema> {
  organization: CompleteOrganization
}

/**
 * RelatedUserSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserSchema: z.ZodSchema<CompleteUser> = z.lazy(() => UserSchema.extend({
  organization: RelatedOrganizationSchema,
}))
