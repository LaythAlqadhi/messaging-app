"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send } from "lucide-react";

import { cn } from "@/lib/cn";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import AttachImageButton from "./AttachImageButton";

export const FormSchema = z
  .object({
    images: z.array(z.instanceof(File)),
    message: z.string(),
  })
  .refine((data) => data.images.length > 0 || data.message.length > 0);

export function MessageForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      images: [],
      message: "",
    },
  });

  const imagesCount = form.watch("images").length;

  const canSubmit = () => {
    const { isDirty, isValid } = form.formState;

    return isDirty && isValid;
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { images, message } = data;

    form.reset();

    try {
      const formData = new FormData();
      images.forEach((image) => {
        formData.append("images", image);
      });
      formData.append("message", message);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res && res.status >= 400) {
        throw new Error("Something went wrong!");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex justify-center items-center gap-4"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message..."
                  className="w-full min-h-[42px] rounded-lg border border-muted p-2"
                  rows={1}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2 mt-2">
          <div className="relative">
            <Badge
              variant="destructive"
              className={cn(
                "absolute -top-2 -right-2",
                !imagesCount && "hidden",
              )}
            >
              {imagesCount}
            </Badge>
            <AttachImageButton control={form.control} />
          </div>
          <Button type="submit" size="icon" disabled={!canSubmit()}>
            <Send className="size-5" aria-hidden />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
