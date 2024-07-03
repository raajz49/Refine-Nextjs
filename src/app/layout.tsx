import { DevtoolsProvider } from "@providers/devtools";
import "./globals.css";
import "./themes.css";

import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import React, { Suspense } from "react";

import { dataProvider } from "@providers/data-provider";
import "@styles/global.css";
import { FlagIcon, FlagOffIcon, MapIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="theme-light test">
        <Suspense>
          {/* <GitHubBanner /> */}
          <RefineKbarProvider>
            <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider}
              resources={[
                // {
                //   name: "project",
                //   list: "/projects",
                //   create: "/country/create",
                //   edit: "/country/edit/:id",
                //   show: "/country/show/:id",
                //   icon: <FlagIcon />,
                //   meta: {
                //     canDelete: true,
                //   },
                // },

                {
                  name: "categories",
                  list: "/categories",
                  create: "/categories/create",
                  edit: "/categories/edit/:id",
                  show: "/categories/show/:id",
                  icon: <FlagOffIcon />,
                  meta: {
                    canDelete: true,
                  },
                },

                {
                  name: "getonsitehour",
                  list: "/getonsitehour",
                  create: "/country/create",
                  edit: "/getonsitehour/edit/:id",
                  show: "/getonsitehour/show/:id",
                  icon: <FlagOffIcon />,
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "stock-journal",
                  list: "/stock-journal",
                  create: "/country/create",
                  edit: "/country/edit/:id",
                  show: "/country/show/:id",
                  icon: <FlagOffIcon />,
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "projects",
                  list: "/projects",
                  create: "/projects/create",
                  edit: "/projects/edit/:id",
                  show: "/projects/show/:id",
                  icon: <FlagOffIcon />,
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "products",
                  list: "/product",
                  create: "/country/create",
                  edit: "/country/edit/:id",
                  show: "/country/show/:id",
                  icon: <FlagIcon />,
                  meta: {
                    canDelete: true,
                  },
                },

                {
                  name: "country",
                  list: "/country",
                  create: "/country/create",
                  edit: "/country/edit/:id",
                  show: "/country/show/:id",
                  icon: <FlagIcon />,
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "states",
                  list: "/states",
                  create: "/states/create",
                  edit: "/states/:id",
                  show: "/states/:id",
                  meta: {
                    canDelete: true,
                  },
                  icon: <MapIcon />,
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "uqGwFx-UFQGGi-vG5y7M",
              }}
            >
              {children}

              <RefineKbar />
            </Refine>
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
