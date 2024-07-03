"use client";

import type { PropsWithChildren } from "react";
import { Breadcrumbs } from "../breadcrumb";
import { Menu } from "../menu";
import Sidebar from "./sidebar";
import DesktopHeader from "./desktopHeader";
// import MobileHeader from "./mobile-header";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="">
      {/* <MobileHeader/> */}
      <DesktopHeader />

      <div className="flex flex-grow gap-64">
        <Menu className="flex-shrink-0" />

        <main className="container mx-auto flex-grow overflow-y-auto pt-[50px] lg:pt-0">
          <Breadcrumbs />
          <div className="pt-6">{children}</div>
        </main>
      </div>
    </div>
  );
};
