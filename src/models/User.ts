import { z } from "zod";

// Basic User Schema
export const BasicUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: "Name must be 5 or more characters long." }),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: "Username must be 4 or more characters long." }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Invalid email address." }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  website: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: "URLs must be a minimum of 5 characters." })
    .refine((val) => val.includes("."), { message: "Invalid URL." })
    .optional(),
});

// Company Schema
const UserCompanySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Company name must be 3 or more characters long." }),
  catchPhrase: z.string().optional(),
});

// Address Schema
const UserAddressSchema = z.object({
  street: z
    .string()
    .trim()
    .min(5, { message: "Street must be 5 or more characters long." }),
  suite: z
    .string()
    .trim()
    .min(5, { message: "Suite must be 5 or more characters long." }),
  city: z
    .string()
    .trim()
    .min(2, { message: "City must be 2 or more characters long." }),
  zipcode: z
    .string()
    .min(4, { message: "Zip code must be at least 4 characters long." }),
});

// Address with Geo
export const UserAddressSchemaWithGeo = UserAddressSchema.extend({
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
});

// ID Schema
const HasIDSchema = z.object({
  id: z.number().int().positive(),
});

// ✅ Schema Variants
export const UserFormSchemaFull = BasicUserSchema.extend({
  address: UserAddressSchemaWithGeo,
  company: UserCompanySchema,
});

export const UserFormSchemaWithCompany = BasicUserSchema.extend({
  company: UserCompanySchema,
});

export const UserFormSchemaWithAddress = BasicUserSchema.extend({
  address: UserAddressSchema,
});

export const UserSchemaWithAddress =
  UserFormSchemaWithAddress.merge(HasIDSchema);

export const UserSchemaWithGeo = BasicUserSchema.extend({
  address: UserAddressSchemaWithGeo,
}).merge(HasIDSchema);

// ✅ Types
export type UserFormFull = z.infer<typeof UserFormSchemaFull>;
export type UserFormWithAddress = z.infer<typeof UserFormSchemaWithAddress>;
export type UserWithAddress = z.infer<typeof UserSchemaWithAddress>;
export type UserWithGeo = z.infer<typeof UserSchemaWithGeo>;
