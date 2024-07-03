"use client";

import { metadata } from "@app/layout";
import { Button } from "@components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import {
  useCustom,
  useDelete,
  useGo,
  useList,
  useNavigation,
  useNotification,
} from "@refinedev/core";
import { Eye, Pencil, Trash } from "lucide-react";
import Router, { useRouter } from "next/navigation";
import React from "react";

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

const CategoriesPage = () => {
  const { open, close } = useNotification();
  const { data: CategoriesData, isLoading } = useList<ApiResponse>({
    resource: "categories",

    meta: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
  });

  const { edit, show, create } = useNavigation();
  const go = useGo();
  const { mutate } = useDelete();
  if (isLoading) {
    return <div>Loading.......</div>;
  }
  console.log(CategoriesData);
  const employees = CategoriesData?.data;
  // const pagination = CategoriesData?.data?.data?.pagination;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 className="ring-gray-300 font-bold p-2">List</h1>
        <div>
          <Button
            onClick={() => {
              create("categories");
            }}
          >
            Create
          </Button>
        </div>
      </div>
      <Table>
        <TableCaption>This is the data for get on site hour</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Employee Name</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created_At</TableHead>
            <TableHead>Updated_At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.data.map((employee: any) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.color}</TableCell>
              <TableCell>{employee.status}</TableCell>
              <TableCell>{employee.created_at}</TableCell>
              <TableCell>{employee.updated_at}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      show("categories", employee.id);
                    }}
                  >
                    <Eye />
                  </Button>

                  <Button
                    onClick={() => {
                      edit("categories", employee.id);
                    }}
                    className="bg-blue-600"
                  >
                    <Pencil />
                  </Button>

                  <Button
                    onClick={() => {
                      // router.refresh();
                      mutate({
                        resource: "categories",
                        id: employee.id,
                        // meta: MetaData,
                        meta: {
                          headers: {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                          },
                        },
                        // invalidates: ["list"],
                      });
                      open?.({
                        key: "notification-key",
                        type: "success",
                        message: "Successfully updated Blog Post",
                        description: "This is a success message",
                      });

                      // close notification
                      close?.("notification-key");
                    }}
                    className="bg-red-600"
                  >
                    <Trash />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesPage;
