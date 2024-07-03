import React from "react";
import {
  type IResourceComponentsProps,
  useNavigation,
  useOne,
  useSelect,
} from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

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

const EditTime: React.FC<ApiResponse> = () => {
  const {
    refineCore: { onFinish, queryResult },
    ...form
  } = useForm({
    refineCoreProps: {
      meta: {
        populate: ["update/getonsitehour"],
      },
    },
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = form;

  const employeeData = queryResult?.data?.data?.data;

  return <div></div>;
};

export default EditTime;
