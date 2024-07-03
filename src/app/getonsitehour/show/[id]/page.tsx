"use client";
import { useCustom, useShow } from "@refinedev/core";
import React, { use } from "react";

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

const ShowEmployeePage = () => {
  const { queryResult, setShowId } = useShow<ApiResponse>({
    resource: "https://erp.pioneerassociate1234.com.np/api/v1/getonsitehour",

    meta: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
  });
  setShowId("123");
  const { data: EmployeeData, isLoading, isError } = queryResult;

  if (isLoading) {
    return <div>Loading.......</div>;
  }
  console.log(EmployeeData);
  const employees = EmployeeData?.data?.data?.data || [];
  const pagination = EmployeeData?.data?.data?.pagination;

  return (
    <div>
      <div>Get on site Hour</div>
      <div>id:{pagination?.last_page}</div>
      <div></div>
    </div>
  );
};

export default ShowEmployeePage;
