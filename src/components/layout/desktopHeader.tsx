"use client";

import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import { LogOut, MenuIcon, PhoneCallIcon } from "lucide-react";
import React, { useState } from "react";
// import Sidebar from "./sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Popover, PopoverTrigger } from "@components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Button } from "@components/ui/button";
import { useLogout } from "@refinedev/core";
import useSidebarStore from "@components/store/useSidebarStore";

// import { ModeToggle } from "@components/theme-toggle";

interface DesktopHeaderProps {
  // Add props here
}

const DesktopHeader: React.FC<DesktopHeaderProps> = (props) => {
  const [open, setOpen] = useState(true);
  const { mutate: logout } = useLogout();
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  return (
    <nav
      className={`hidden  ml-[350px]
      } px-6 h-[50px] lg:flex items-center justify-between border-b  top-0  z-50`}
    >
      <div className="p-2 cursor-pointer">
        <Sheet>
          <button onClick={toggleSidebar} className="text-black">
            <MenuIcon size={24} />
          </button>
          <SheetContent side={"left"} className="w-[18.7rem] "></SheetContent>
        </Sheet>
      </div>
      <div className="flex row gap-5">
        <Popover>
          <PopoverTrigger className="flex  hover:bg-slate-100 dark:hover:bg-slate-900 items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full ring-gray-300">
            <Avatar
              className={
                "h-7 flex items-center border justify-center w-7 md:h-10 md:w-10"
              }
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="mr-5 mt-1  border  p-2 rounded-md ">
            <div className="flex gap-4 ">
              <Avatar
                className={
                  "h-7 flex items-center border justify-center w-7 md:h-10 md:w-10"
                }
              >
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                Raj Koirala
                <div className="text-[12px] text-muted-foreground">
                  Koiralaraajz@gmail.com
                </div>
              </div>
            </div>
            <Button
              //  variant="destructive"
              size="sm"
              onClick={() => logout()}
              className=" rounded-sm cursor-pointer bg-gray-200 mt-2 hover:bg-gray-200  text-black flex gap-x-4 "
            >
              <LogOut />
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
};

export default DesktopHeader;
