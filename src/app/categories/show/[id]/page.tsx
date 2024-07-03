"use client";
import { useCustom, useShow } from "@refinedev/core";
import React, { use } from "react";

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
  data: Employee; // Array of Projects
}

const ShowEmployeePage = () => {
  const { queryResult } = useShow<ApiResponse>({
    resource: "categories",
    meta: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
  });

  const { data: CategoriesData, isLoading, isError } = queryResult;

  const Categories = CategoriesData?.data?.data;
  // const pagination = EmployeeData?.data?.data?.pagination;

  if (isLoading) {
    return <div>Loading.......</div>;
  }
  console.log(Categories);

  return (
    <div>
      <div>Categories Details</div>
      {/* <div>id:{pagination?.last_page}</div> */}
      <p>ID:{Categories?.id}</p>
      <p>Name:{Categories?.name}</p>
      <p>Color:{Categories?.color}</p>
      <p>Status:{Categories?.status}</p>
      <p>Created_At:{Categories?.created_at}</p>
      <p>Updated_At:{Categories?.updated_at}</p>
    </div>
  );
};

export default ShowEmployeePage;
