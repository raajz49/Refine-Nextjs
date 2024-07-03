"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { useLogout, useMenu } from "@refinedev/core";
import { SidebarItem } from "./sidebar-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { links } from "./links";
import useSidebarStore from "../store/useSidebarStore";

interface SidebarProps {
  className?: string;
}

const SidebarSectionSeperator = ({ label }: { label: string }) => {
  return (
    <div className="text-[11px] mt-5 font-semibold uppercase text-black dark:text-white">
      {label}
      <div className="bg-primary h-[2px] w-7 mt-[2px]"></div>
    </div>
  );
};

const SidebarLink = ({
  link,
}: {
  link:
    | {
        label: string;
        icon: React.JSX.Element;
        href: string;
        links?: undefined;
      }
    | {
        label: string;
        icon: React.JSX.Element;
        href: string;
        links: { label: string; icon: React.JSX.Element; href: string }[];
      };
}) => {
  if (link.links) {
    return (
      <Accordion className="" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:bg-primary group text-foreground hover:text-background p-0 px-2 rounded">
            <SidebarItem
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          </AccordionTrigger>
          <AccordionContent className="pl-5">
            {link.links.map((lin) => (
              <SidebarItem
                key={lin.label}
                href={lin.href}
                icon={lin.icon}
                label={lin.label}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  } else {
    return (
      <SidebarItem
        key={link.label}
        href={link.href}
        icon={link.icon}
        label={link.label}
      />
    );
  }
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { mutate: logout } = useLogout();
  const { menuItems, selectedKey } = useMenu();
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-full lg:w-[300px] border-r-2 flex-col transition-transform transform",
        {
          "translate-x-0": isSidebarOpen,
          "-translate-x-full": !isSidebarOpen,
        },
        className
      )}
    >
      <div className="sticky top-0 bg-muted">
        <Link href={"/learn"}>
          <div className="pt-4 pb-5 bg-muted text-primary flex items-center justify-center gap-x-3">
            <LayoutDashboard />{" "}
            <h1 className="text-xl font-bold text-center tracking-wide">
              Dashboard
            </h1>{" "}
          </div>
        </Link>
      </div>
      <div className="flex mt-3 p-2 flex-col gap-y-2 flex-1">
        {links.map((item) => (
          <React.Fragment key={item.label}>
            <SidebarSectionSeperator label={item.label} />
            {item.links.map((link) => (
              <SidebarLink key={link.label} link={link} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
