"use client";

import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { useMenu } from "@refinedev/core";
import Link from "next/link";
import { useState } from "react";

interface MenuProps {
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
  const { menuItems, selectedKey } = useMenu();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // <nav className="px-2 lg:block hidden">
    <nav
      className={cn(isExpanded ? "hidden" : "block", "px-2 lg:block hidden")}
    >
      <ul className="fixed flex flex-col  justify-start  md:items-start">
        {menuItems.map((item) => (
          <li className="text-sm " key={item.key}>
            <Button variant="ghost" className="flex gap-1">
              <span>{item?.icon}</span>
              <Link href={item.route ?? "/"} className="focus:text-blue-800">
                {item.label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
      <div>
        <Button
          onClick={toggleSidebar}
          variant="destructive"
          className="mt-[30rem]"
        >
          click
        </Button>
      </div>
    </nav>
  );
};
