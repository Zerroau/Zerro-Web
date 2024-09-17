import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
  company,
}) => (
  <div className="flex flex-col gap-4 p-4">
    <h1 className="text-2xl">Email from {name}</h1>
    <p className="text-base">Email: {email}</p>
    {company && <p className="text-base">Company: {company}</p>}
    <p className="text-base">Phone: {phone}</p>
    <p className="text-base">Message: {message}</p>
  </div>
);

interface SubscribeTemplateProps {
  email: string;
}

export const SubscribeTemplate: React.FC<Readonly<SubscribeTemplateProps>> = ({
  email,
}) => (
  <div className="flex flex-col gap-4 p-4">
    <h1 className="text-2xl">Subscribed for newsletter</h1>
    <p className="text-base">Email: {email}</p>
  </div>
);
