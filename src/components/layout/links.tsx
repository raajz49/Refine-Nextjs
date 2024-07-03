"use client";
import React from "react";
import {
  Banknote,
  BarChart,
  BookCopy,
  BookOpen,
  BugIcon,
  Database,
  DatabaseBackup,
  DatabaseZap,
  GoalIcon,
  GroupIcon,
  InfoIcon,
  LayoutDashboard,
  MessageCircle,
  MinusIcon,
  Newspaper,
  PenTool,
  PieChart,
  StickyNote,
  TicketIcon,
  User2,
  View,
  ViewIcon,
} from "lucide-react";

export const links = [
  {
    label: "dashboard",
    links: [
      {
        label: "Project",
        icon: <LayoutDashboard />,
        href: "/projects",
      },
    ],
  },
  {
    label: "ticketing system",
    links: [
      {
        label: "Tickets",
        icon: <TicketIcon />,
        href: "/",
      },
      {
        label: "Comments",
        icon: <MessageCircle />,
        href: "/",
      },
      {
        label: "Migration Mgmt",
        icon: <Database />,
        href: "/",
        links: [
          {
            label: "Third party Types",
            icon: <DatabaseBackup />,
            href: "/",
          },
          {
            label: "Migration Management",
            icon: <DatabaseZap />,
            href: "/",
          },
        ],
      },
    ],
  },

  {
    label: "Category and Blog",
    links: [
      {
        label: "Categories",
        icon: <BookCopy />,
        href: "/categories",
        links: [
          {
            label: "View Categories",
            icon: <ViewIcon />,
            href: "/",
          },
        ],
      },

      {
        label: "Blog Posts",
        icon: <StickyNote />,
        href: "/blog-posts",
        links: [
          {
            label: "View Blogs",
            icon: <View />,
            href: "/",
          },
        ],
      },
    ],
  },

  {
    label: "project management system",
    links: [
      {
        label: "Accounting management",
        icon: <Database />,
        href: "/",
        links: [
          {
            label: "client details",
            icon: <User2 />,
            href: "",
          },
        ],
      },
      {
        label: "Training management",
        icon: <BookOpen />,
        href: "/",
        links: [
          {
            label: "Training Group Time",
            href: "/",
            icon: <GroupIcon />,
          },
          {
            label: "Training Manage",
            href: "/",
            icon: <PenTool />,
          },
          {
            label: "Training Details",
            href: "/",
            icon: <InfoIcon />,
          },
          {
            label: "Training Group Time",
            href: "/",
            icon: <GroupIcon />,
          },
        ],
      },
      {
        label: "Projects",
        href: "/",
        icon: <GoalIcon />,
      },
      {
        label: "Issue Tracker",
        href: "/",
        icon: <BugIcon />,
        links: [
          {
            label: "Issue Types",
            href: "/",
            icon: <MinusIcon />,
          },
          {
            label: "Issue Trackers",
            href: "/",
            icon: <MinusIcon />,
          },
        ],
      },
      {
        label: "Client Enrollment ",
        href: "/",
        icon: <Newspaper />,
        links: [
          {
            label: "Bank Name",
            href: "/",
            icon: <Banknote />,
          },
          {
            label: "Service Type",
            href: "/",
            icon: <MinusIcon />,
          },
          {
            label: "Service Type Option",
            href: "/",
            icon: <MinusIcon />,
          },
        ],
      },
    ],
  },
  {
    label: "human resource management",
    links: [
      {
        label: "reports",
        href: "/",
        icon: <BarChart />,
      },
      {
        label: "Source data",
        href: "/",
        icon: <PieChart />,
      },
    ],
  },
];

export const UserData = [
  {
    label: "User Details",
    data: [
      {
        ID: "1",
        "Project Name": "Miscellaneous",
        "Task Name": "UI with Refine",
        "Open By": "Raajz Koirala",
        "Tranfer To": "No one",
        Status: "Progress",
        "Start Date": "2043-04-04",
        "End Date": "2043-04-04",
      },
      {
        name: "Naru Karki",
      },
      {
        name: "Suraj Nepal",
      },
      {
        name: "Ankur Pokharel",
      },
    ],
  },
];

export const Ticket = [
  {
    label: "Ticket Details",
    data: [
      {
        label: "TOTAL TICKETS",
        Total: "38,222",
      },
      {
        label: "OPEN TICKETS",
        Total: "55",
      },
      {
        label: "CLOSED TICKETS",
        Total: "83,494",
      },
      {
        label: "UNSOLVED TICKETS",
        Total: "89",
      },
      {
        label: "WORK-IN-PROGRESS TICKETS",
        Total: "289",
      },
      {
        label: "CANCELLED TICKETS",
        Total: "22",
      },
    ],
  },
];
