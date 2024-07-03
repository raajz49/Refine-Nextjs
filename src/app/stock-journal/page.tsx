"use client";

import { useCustom, useList, useOne, useApiUrl } from "@refinedev/core";
import React from "react";

interface ApiResponse {
  data: StockJournal[];
}

interface StockJournal {
  id: number;
  total_consumption: number;
  total_production: number;
  profit_loss: string;
  date: string;
  narration: string | null;
  created_at: string;
  updated_at: string;
}
export default function StockJournalPage() {
  const { data, isLoading, isError } = useCustom<ApiResponse>({
    url: `${useApiUrl}/stock-journal`,
    method: "get",
  });

  if (isLoading) {
    return <div>............Loading</div>;
  }

  if (isError) {
    return <div>error......</div>;
  }

  console.log(data.data);
  return (
    <div>
      <h1>This is Stock</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>total_consumption</th>
            <th>total_production</th>
            {/* <th>Material</th>
            <th>Category</th>
            <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {data?.data.data.map((product) => (
            <tr key={product.id}>
              <td> {product.total_consumption}</td>
              <td> {product.total_production}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
