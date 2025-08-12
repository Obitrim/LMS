import { OrganizationSchema } from "@/common/lib/zod";
import { z } from "@/common/utils/zod.util";

export const LoginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Minimum of 8 characters expected")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/,
        "Must have uppercase, lowercase, numerical and special character"
      ),
  }),
});

export const SignupSchema = z.object({
  body: z.object({
    organization_name: z.coerce.string().default("company name"),
    email: z.coerce.string().email(),
    password: z.coerce.string(),
  }),
});

export type SignupDto = z.infer<typeof SignupSchema>["body"];
export type LoginDto = z.infer<typeof LoginSchema>["body"];

export type RefreshTokenDto = {
  refresh_token: string;
};

export type JWTData = {
  user_id: string;
  organization_id: string;
};

export const AuthResponseSchema = z.object({
  token: z.string(),
  refresh_token: z.string(),
  user: z.object({}),
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;

export const RefreshTokenSchema = z.object({
  body: z.object({ refresh_token: z.string() }),
});

export const RefreshTokenResponseSchema = z.object({
  token: z.string(),
});

export const OnboardRequestSchema = z.object({
  body: OrganizationSchema.pick({
    country: true,
    city: true,
    zip: true,
  }).extend({
    organization_id: z.string().uuid(),
  }),
});

export type OnboardRequestDto = z.infer<typeof OnboardRequestSchema>["body"];

export const OnboardRequestHeaderSchema = z.object({
  Authorization: z.coerce.string().refine((val) => {
    const token = val.split(" ")[1];
    return token !== undefined && token !== "" && val.includes("bearer");
  }),
});
