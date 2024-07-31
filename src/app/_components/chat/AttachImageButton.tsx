"use client";

import * as React from "react";
import { Image } from "lucide-react";
import type { Control } from "react-hook-form";
import { z } from "zod";

import useMediaQuery from "@/hooks/useMediaQuery";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUploader } from "@/components/file-uploader";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { FormSchema } from "./form";

export interface AttachImageButtonProps {
  control: Control<z.infer<typeof FormSchema>>;
}

function AttachImageButton({ control }: AttachImageButtonProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const content = (
    <FormField
      control={control}
      name="images"
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="sr-only">Images</FormLabel>
          <FormControl>
            <FileUploader
              value={field.value}
              onValueChange={field.onChange}
              maxFiles={2}
              maxSize={2 * 1024 * 1024}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button type="button" size="icon">
            <Image className="size-5" aria-hidden />
            <span className="sr-only">Attachments</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">{content}</DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button type="button" size="icon">
          <Image className="size-5" aria-hidden />
          <span className="sr-only">Attachments</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>{content}</DrawerContent>
    </Drawer>
  );
}

export default AttachImageButton;
