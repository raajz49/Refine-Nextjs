"use client";

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
import { useCustom, useGo, useNavigation } from "@refinedev/core";
import { Eye, Pencil } from "lucide-react";
import React from "react";

interface Employee {
  id: number;
  employee_id: string;
  date: string;
  slot: string;
  time_from: string;
  time_to: string;
  verified: number;
  status: number;
}

interface ApiResponse {
  data: {
    pagination: {
      total: number;
      per_page: number;
      current_page: number;
      last_page: number;
    };
    data: Employee[]; // Array of Projects
  };
}

const SiteHourPage = () => {
  const { data: EmployeeData, isLoading } = useCustom<ApiResponse>({
    url: "https://erp.pioneerassociate1234.com.np/api/v1/getonsitehour",
    method: "get",
    config: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
  });

  const { edit, show } = useNavigation();
  const go = useGo();

  if (isLoading) {
    return <div>Loading.......</div>;
  }
  console.log(EmployeeData);
  const employees = EmployeeData?.data?.data?.data || [];
  const pagination = EmployeeData?.data?.data?.pagination;

  return (
    <div>
      <Table>
        <TableCaption>This is the data for get on site hour</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Employee Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Slot</TableHead>
            <TableHead>Time_From</TableHead>
            <TableHead>Time_to</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.employee_id}</TableCell>
              <TableCell>{employee.date}</TableCell>
              <TableCell>{employee.slot}</TableCell>
              <TableCell>{employee.time_from}</TableCell>
              <TableCell>{employee.time_to}</TableCell>
              <TableCell>{employee.verified}</TableCell>
              <TableCell>{employee.status}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      show("getonsitehour", employee.id);
                    }}
                  >
                    <Eye />
                  </Button>

                  <Button
                    onClick={() => {
                      edit("getonsitehour", employee.id);
                    }}
                  >
                    <Pencil />
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

export default SiteHourPage;
