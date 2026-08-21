import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

export interface NewLeadEmailProps {
  name?: string;
  company?: string;
  whatsapp?: string;
  email?: string;
  moment?: string;
}

export function NewLeadEmail({
  name = "Sem nome",
  company = "Sem empresa",
  whatsapp = "Sem WhatsApp",
  email = "Sem e-mail",
  moment = "Não informado",
}: NewLeadEmailProps) {
  const row = (label: string, value: string) => (
    <Section style={{ marginBottom: "12px" }}>
      <Text
        style={{
          margin: 0,
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
          color: "#6b7280",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          margin: "2px 0 0",
          fontSize: "16px",
          color: "#1C2224",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {value}
      </Text>
    </Section>
  );

  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>{`Novo lead B01: ${name} (${company})`}</Preview>
      <Body
        style={{
          backgroundColor: "#ffffff",
          margin: 0,
          padding: "24px 0",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            border: "1px solid #47B6F3",
            borderRadius: "24px",
            padding: "32px",
          }}
        >
          <Text
            style={{
              margin: 0,
              display: "inline-block",
              backgroundColor: "#8ACDBA",
              color: "#1C2224",
              borderRadius: "999px",
              padding: "4px 12px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
            }}
          >
            Novo lead
          </Text>
          <Heading
            style={{
              fontSize: "24px",
              lineHeight: "1.25",
              color: "#1C2224",
              margin: "16px 0 4px",
            }}
          >
            {name} · {company}
          </Heading>
          <Text style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>
            Chegou pelo formulário da landing page da B01.
          </Text>
          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />
          {row("Nome", name)}
          {row("Empresa", company)}
          {row("WhatsApp", whatsapp)}
          {row("E-mail", email)}
          {row("Momento da empresa", moment)}
          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />
          <Text style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
            B01 · BaseZeroUm · Decide Beyond
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: NewLeadEmail,
  displayName: "Novo lead (B01)",
  subject: (data: Record<string, any>) =>
    `Novo lead B01: ${data?.name ?? "sem nome"}${data?.company ? ` (${data.company})` : ""}`,
  to: "felipe.garcez@basezeroum.com.br",
  previewData: {
    name: "Maria Souza",
    company: "Clínica Aurora",
    whatsapp: "(11) 91138-0734",
    email: "maria@clinicaaurora.com.br",
    moment: "Quero organizar os dados de faturamento e prever churn.",
  },
} satisfies TemplateEntry;
