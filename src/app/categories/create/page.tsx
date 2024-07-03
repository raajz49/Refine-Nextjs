"use client";

import {
  HttpError,
  useForm as refineForm,
  useNavigation,
} from "@refinedev/core";
import React from "react";

import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(5),
  color: z.string().min(5),
});

interface Employee {
  id: number;
  name: string;
  color: string;
  slot: string;
  created_at: string;
  updated_at: string;
  deleted_at: number;
  user_id: number;
  status: number;
}

interface ApiResponse {
  data: Employee[]; // Array of Projects
}

interface FormValues {
  name?: string;
  color?: string;
}

const EditCategories: React.FC = () => {
  const { list } = useNavigation();
  const { onFinish } = refineForm<ApiResponse, HttpError, FormValues>({
    resource: "categories",
    meta: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
    action: "create",
    redirect: "show",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = form.handleSubmit((data) => {
    onFinish(data);
  });

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="ring-gray-300 font-bold mt-2">Create</h1>
        <div className="ml-32">
          <Button
            onClick={() => {
              list("categories");
            }}
          >
            List
          </Button>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>Enter the category name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="Color" {...field} />
                </FormControl>
                <FormDescription>
                  Specify the color of the category.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default EditCategories;
