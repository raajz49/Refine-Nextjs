"use client";
import { Button } from "@components/ui/button";
import { useCreateButton, useList } from "@refinedev/core";

export default function ProductData() {
  const { data, isLoading } = useList({ resource: "products" });
  if (isLoading) {
    return <div>............Loading</div>;
  }
  return (
    <div>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Material</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((product) => (
            <tr key={product.id}>
              <td> {product.name}</td>
              <td> {product.description}</td>
              <td> {product.price}</td>
              <td> {product.material}</td>
              <td> {product.category.id}</td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
