"use client";

import { useCustom, useGo, useNavigation } from "@refinedev/core";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronFirst, ChevronLast } from "lucide-react";
import { Eye, Pencil } from "lucide-react";
import { Button } from "@components/ui/button";

interface Projects {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  project_manager: string;
  category: string;
  status: string;
  priority: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  data: {
    pagination: {
      total: number;
      per_page: number;
      current_page: number;
      last_page: number;
    };
    data: Projects[]; // Array of Projects
  };
}

const ProjectPage = () => {
  const { data: projectData, isLoading } = useCustom<ApiResponse>({
    url: "https://erp.pioneerassociate1234.com.np/api/v1/getproject",
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

  const projects = projectData?.data?.data?.data || [];
  const pagination = projectData?.data?.data?.pagination;

  return (
    <div>
      <Table>
        <TableCaption>A list of projects.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Project Manager</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.id}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.start_date}</TableCell>
              <TableCell>{project.end_date}</TableCell>
              <TableCell>{project.project_manager}</TableCell>
              <TableCell>{project.category}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>{project.priority}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.created_at}</TableCell>
              <TableCell>{project.updated_at}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      show("projects", project.id);
                    }}
                  >
                    <Eye />
                  </Button>
                  <Button
                    onClick={() => {
                      go({
                        to: `/projects/edit/${project.id}`,
                      });
                    }}
                    variant={"outline"}
                  >
                    <Pencil />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={11}>
              <div className="mt-8">
                <Pagination>
                  <PaginationContent className="ml-auto">
                    <PaginationItem className="flex items-center gap-x-4 justify-center">
                      <strong className="w-32">
                        {pagination?.current_page} / {pagination?.last_page}
                      </strong>
                      <p className="w-20">Go to</p>
                      <Input
                        type="number"
                        className="w-20"
                        defaultValue={pagination?.current_page}
                        onChange={(e) => {
                          const page = e.target.value
                            ? Number(e.target.value)
                            : 1;
                          // Function to handle page change
                        }}
                      />
                      <Select
                        value={pagination?.per_page.toString()}
                        onValueChange={(e) => {
                          // Function to handle items per page change
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Items per page" />
                        </SelectTrigger>
                        <SelectContent>
                          {[10, 20, 30, 40, 50].map((pageSize) => (
                            <SelectItem
                              key={pageSize}
                              value={pageSize.toString()}
                            >
                              Show {pageSize}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink>
                        <ChevronFirst />
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationPrevious />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink>
                        <ChevronLast />
                      </PaginationLink>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ProjectPage;
