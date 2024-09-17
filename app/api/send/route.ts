import { EmailTemplate } from "@/components/common/EmailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, message, company } = body;

    const { data, error } = await resend.emails.send({
      from: "Zerro <onboarding@resend.dev>",
      to: ["hello@zerro.com.au"],
      subject: `Email from ${name} <${email}>`,
      react: EmailTemplate({ name, email, phone, message, company }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
