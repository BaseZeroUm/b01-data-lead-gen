import { sendTemplateEmail } from "@/lib/email-templates/send-email";

export interface LeadInput {
  name: string;
  company?: string | null | undefined;
  whatsapp: string;
  email: string;
  moment?: string | null | undefined;
  source?: string | null | undefined;
  profile?: string | null | undefined;
}

export async function createLead(input: LeadInput) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const payload = {
    name: input.name.trim().slice(0, 120),
    company: input.company?.trim().slice(0, 120) || null,
    whatsapp: input.whatsapp.trim().slice(0, 40),
    email: input.email.trim().slice(0, 200),
    moment: input.moment?.trim().slice(0, 1000) || null,
    source: input.source?.trim().slice(0, 40) || "b01",
    profile: input.profile?.trim().slice(0, 60) || null,
  };

  const { data, error } = await supabaseAdmin
    .from("leads")
    .insert(payload)
    .select("id")
    .single();

  if (error) throw new Error(error.message);

  try {
    await sendTemplateEmail("new-lead", "felipe.garcez@basezeroum.com.br", {
      templateData: {
        ...payload,
        company:
          payload.company ??
          (payload.source === "creators01" ? "Creators 01" : "Sem empresa"),
        moment: payload.profile
          ? `${payload.profile}${payload.moment ? ` · ${payload.moment}` : ""}`
          : payload.moment,
      },
      idempotencyKey: `new-lead-${data.id}`,
      replyTo: payload.email,
    });
  } catch (err) {
    console.error("lead notification email failed", err);
  }

  return { ok: true as const };
}
