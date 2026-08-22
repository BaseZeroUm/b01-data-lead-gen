import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { subscribeToNewsletter } from "@/lib/newsletter.server";

const schema = z.object({
  email: z.string().trim().email().max(200),
  source: z.string().trim().max(80).optional(),
});

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => subscribeToNewsletter(data.email, data.source ?? "blog"));
