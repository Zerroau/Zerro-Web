"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, {
      message: "Name should be at least 2 characters",
    })
    .max(50, {
      message: "Name should be at most 50 characters",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  phone: z
    .string({
      required_error: "Phone is required",
    })
    .min(10, {
      message: "Phone should be at least 10 characters",
    })
    .max(15, {
      message: "Phone should be at most 15 characters",
    }),
  company: z
    .string()
    .min(2, {
      message: "Company should be at least 2 characters",
    })
    .max(50, {
      message: "Company should be at most 50 characters",
    })
    .optional(),
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(10, {
      message: "Message should be at least 10 characters",
    })
    .max(500, {
      message: "Message should be at most 500 characters",
    }),
});

const AnimatedInput = motion(Input);
const AnimatedTextarea = motion(Textarea);

const AnimatedButton = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  //@ts-ignore
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </motion.button>
);

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:px-[100px] grid grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-7"
      >
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="col-span-2 bg-green-500 text-white p-4 rounded-md text-center"
            >
              Thank you for your message! We&apos;ll get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>

        {["name", "email", "phone", "company"].map((field, index) => (
          <FormField
            key={field}
            control={form.control}
            name={field as keyof z.infer<typeof formSchema>}
            render={({ field: fieldProps }) => (
              <FormItem className="space-y-1.5 max-lg:col-span-2">
                <FormLabel className="text-lg max-lg:text-xs max-lg:font-semibold font-bold text-[#0F0F0F]">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  {field === "company" && (
                    <span className="text-xs font-semibold">(optional)</span>
                  )}
                </FormLabel>
                <FormControl>
                  <AnimatedInput
                    placeholder={
                      field === "name"
                        ? "Enter your name"
                        : field === "email"
                        ? "Enter your email address"
                        : field === "phone"
                        ? "Enter your telephone number"
                        : "Enter your company name"
                    }
                    {...fieldProps}
                    className="border-2 border-black rounded-none placeholder:text-[#0F0F0F] placeholder:text-lg max-lg:placeholder:text-xs max-lg:text-xs placeholder:font-normal h-[45px] lg:h-[58px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="text-lg max-lg:text-xs max-lg:font-semibold font-bold text-[#0F0F0F]">
                Leave us message
              </FormLabel>
              <FormControl>
                <AnimatedTextarea
                  placeholder="Please type your message here..."
                  className="resize-none max-lg:text-xs h-[200px] lg:h-[236px] border-2 border-black rounded-none placeholder:text-[#0F0F0F] placeholder:text-lg max-lg:placeholder:text-xs placeholder:font-normal"
                  {...field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-2 flex items-center justify-center">
          <AnimatedButton
            type="submit"
            className="text-lg max-lg:text-xs text-white bg-black w-full h-[50px] lg:w-[170px] lg:h-[75px] rounded-none font-bold"
          >
            Send Message
          </AnimatedButton>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
