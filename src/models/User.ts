import { z } from "zod";

export const BasicUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be 3 or more characters long." }),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: "Username must be 4 or more characters long." }),
  email: z.string().email().trim().toLowerCase(),
  phone: z
    .string()
    .min(10, { message: "Phone number are a minimum of 10 digits." }),
  website: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: "URLs must be aminimum of 5 characters" })
    .refine((val) => val.indexOf(".") !== -1, { message: "INVALID URL" })
    .optional(),
});
