"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
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
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/contact/send-email";
import toast, { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const res = await sendEmail(
      data.name,
      data.email,
      data.phone,
      data.message,
      data.company
    );

    if (res) {
      toast.success("Message sent successfully");

      form.reset({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message");
    }
  };

  const action: () => void = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <form
        action={action}
        className="lg:px-[100px] grid grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-7"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1.5 max-lg:col-span-2">
              <FormLabel className="text-lg max-lg:text-xs max-lg:font-semibold font-bold text-[#0F0F0F] dark:text-white">
                Name
              </FormLabel>
              <FormControl>
                <AnimatedInput
                  placeholder="Name"
                  {...field}
                  className="rounded-none placeholder:text-[#0F0F0F] dark:placeholder:text-white placeholder:text-lg max-lg:placeholder:text-xs max-lg:text-xs placeholder:font-normal h-[45px] lg:h-[58px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1.5 max-lg:col-span-2">
              <FormLabel className="text-lg max-lg:text-xs max-lg:font-semibold font-bold text-[#0F0F0F] dark:text-white">
                Email
              </FormLabel>
              <FormControl>
                <AnimatedInput
                  placeholder="Email"
                  {...field}
                  className="rounded-none placeholder:text-[#0F0F0F] dark:placeholder:text-white placeholder:text-lg max-lg:placeholder:text-xs max-lg:text-xs placeholder:font-normal h-[45px] lg:h-[58px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-1.5 max-lg:col-span-2">
              <FormLabel className="text-lg max-lg:text-xs max-lg:font-semibold font-bold text-[#0F0F0F] dark:text-white">
                Phone
              </FormLabel>
              <FormControl>
                <AnimatedInput
                  placeholder="Phone"
                  {...field}
                  className="rounded-none placeholder:text-[#0F0F0F] dark:placeholder:text-white placeholder:text-lg max-lg:placeholder:text-xs max-lg:text-xs placeholder:font-normal h-[45px] lg:h-[58px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="space-y-1.5 max-lg:col-span-2">
              <FormLabel className="text-lg max-lg:text-xs max-lg:font-semibold font-bold text-[#0F0F0F]">
                Company
                <span className="text-xs font-semibold">(optional)</span>
              </FormLabel>
              <FormControl>
                <AnimatedInput
                  placeholder="Company"
                  {...field}
                  className="rounded-none placeholder:text-[#0F0F0F] dark:placeholder:text-white placeholder:text-lg max-lg:placeholder:text-xs max-lg:text-xs placeholder:font-normal h-[45px] lg:h-[58px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  className="resize-none max-lg:text-xs h-[200px] lg:h-[236px] dark:border-white rounded-none placeholder:text-[#0F0F0F] dark:placeholder:text-white placeholder:text-lg max-lg:placeholder:text-xs placeholder:font-normal"
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
            disabled={form.formState.isSubmitting}
            className="text-lg max-lg:text-xs text-white bg-black dark:bg-white dark:text-black w-full h-[50px] lg:w-[170px] lg:h-[75px] rounded-none font-bold flex items-center justify-center hover:bg-primary-blue hover:text-white"
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="size-8 animate-spin" />
            ) : (
              " Send Message"
            )}
          </AnimatedButton>
        </div>
      </form>

      <Toaster position="top-right" />
    </Form>
  );
};

export default ContactForm;
