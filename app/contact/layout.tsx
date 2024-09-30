import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Zerro | Connect with Australia's Fast-Growing Technology Company forInnovative Solutions",
  description: "Get in touch with Zerro, Australia’s leading software development company. Our expert team is ready to provide custom software solutions to meet your business needs.",
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
