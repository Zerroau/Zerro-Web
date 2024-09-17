import {
  EmailTemplate,
  SubscribeTemplate,
} from "@/components/common/EmailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email } = body;

    const { data, error } = await resend.emails.send({
      from: "Zerro <onboarding@resend.dev>",
      to: ["hello@zerro.com.au"],
      subject: `Subscribe to newsletter`,
      react: SubscribeTemplate({ email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
