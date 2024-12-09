"use client";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
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
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters long." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data) {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/contact', data);
      toast({
        description: response.data.success,
      });

      form.reset();

    } catch (error) {
      toast({
        description: error.response?.data?.error || 'An error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Navbar />
      <main className="dark:bg-gray-900 mx-auto">
        <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-18 lg:px-6">
          <h1 className="border-b border-gray-200 pb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <p className="pt-4 text-gray-500 text-base sm:text-lg md:text-xl dark:text-gray-400">
            Interested in a collaboration or want to know more about my work? Don’t hesitate to contact me!
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white pb-3">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Email:</strong> <a href="mailto:mustafaenesbagcii@gmail.com" className="hover:underline">mustafaenesbagcii@gmail.com</a>
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Phone:</strong> +90 530 320 4100
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Address:</strong> Konya/Turkey
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Follow Me</h2>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/mustafa-enes-ba%C4%9Fc%C4%B1-1662a9313/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/Mustafa-Bagci" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200">
                <FaGithub size={24} />
              </a>
              <a href="https://x.com/bgci_mustafa_?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="youremail@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Please wait
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
