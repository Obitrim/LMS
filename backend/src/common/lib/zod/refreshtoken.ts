import * as z from "zod"

export const RefreshTokenSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  token: z.string(),
  expires_at: z.date(),
})
