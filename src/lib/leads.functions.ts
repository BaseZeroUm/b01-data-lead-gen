import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createLead } from "@/lib/leads.server";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(120),
  whatsapp: z
    .string()
    .trim()
    .min(8)
    .max(40)
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Telefone inválido"),
  email: z.string().trim().email().max(200),
  moment: z.string().trim().max(1000).optional().nullable(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => createLead(data));
