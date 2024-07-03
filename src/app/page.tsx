"use client";

import { Suspense } from "react";

import { WelcomePage } from "@refinedev/core";
import Layout from "./projects/layout";

export default function IndexPage() {
  return (
    <Suspense>
      <Layout>Hello World</Layout>
    </Suspense>
  );
}
