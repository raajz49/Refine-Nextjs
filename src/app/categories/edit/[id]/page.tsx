"use client";

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { HttpError, useForm as refineForm } from "@refinedev/core";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
  name: z.string().min(5),
  color: z.string().min(5),
});

const EditCategories: React.FC = () => {
  // const { queryResult, formLoading, onFinish } = refineForm<
  //   ApiResponse,
  //   HttpError,
  //   FormValues
  // >({
  //   resource: "categories",
  //   meta: {
  //     headers: {
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  //     },
  //   },
  //   action: "edit",
  //   redirect: "show",
  // });

  const { queryResult, formLoading, onFinish } = refineForm<
    ApiResponse,
    HttpError,
    FormValues
  >({
    resource: "categories",
    meta: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
    action: "edit",
    redirect: "show",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const defaultValues = queryResult?.data?.data;

  const [values, setValues] = React.useState<FormValues>({
    name: defaultValues?.data?.name,
    color: defaultValues?.data?.color,
  });

  React.useEffect(() => {
    setValues({
      name: defaultValues?.data?.name || "",
      color: defaultValues?.data?.color || "",
    });
  }, [defaultValues]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    onFinish(values);
  };
  console.log(defaultValues?.data?.name);

  return (
    <div className="flex flex-col">
      {/* <Form {...form}> */}
      <form onSubmit={onSubmit} className="space-y-8">
        <label htmlFor="name">Name</label>
        <Input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />

        <label htmlFor="color">Color</label>
        <Input
          name="color"
          placeholder="color"
          value={values.color}
          onChange={(e) => setValues({ ...values, color: e.target.value })}
        />
        <Button type="submit">Submit</Button>
      </form>
      {/* </Form> */}
    </div>
  );
};

export default EditCategories;
