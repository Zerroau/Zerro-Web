"use client";

import React from "react";

import { Button } from "../ui/button";
import { subscribeToNewsletter } from "@/actions/subscribe/send-email";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const NewsLetter = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    setLoading(true);

    const res = await subscribeToNewsletter(email);

    if (res) {
      toast.success("Successfully subscribed to newsletter");
      setEmail("");
    } else {
      toast.error("Failed to subscribe to newsletter");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white px-2.5 py-[18px] lg:p-2.5 mt-[34px] flex items-center justify-between">
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="focus:outline-none border-none placeholder:text-active-text w-full text-black"
          placeholder="Enter your email address"
        />
        <Button
          type="submit"
          disabled={loading}
          className="rounded-none bg-black w-[160px] h-[60px] text-white max-sm:hidden hover:bg-primary-blue transition-all duration-300 ease-in-out"
        >
          {loading ? <Loader2 className="size-6 animate-spin" /> : "Subscribe"}
        </Button>
        <Toaster position="top-right" />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="rounded-none bg-white hover:bg-white w-full h-[45px] text-black sm:hidden mt-2.5 text-base font-bold"
      >
        {loading ? <Loader2 className="size-6 animate-spin" /> : "Subscribe"}
      </Button>
    </form>
  );
};

export default NewsLetter;
