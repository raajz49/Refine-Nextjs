"use client";

import type { NotificationProvider } from "@refinedev/core";
import { toast } from "react-toastify";

export const notificationProvider: NotificationProvider = {
  open: ({ key, message, type }) => {
    if (type === "progress") {
      if (toast.isActive(key as React.ReactText)) {
        toast.update(key as React.ReactText, {
          type: "default",
          progress: undefined, // Remove progress if unnecessary
          render: message, // Render the message directly
        });
      } else {
        toast(message, {
          toastId: key,
          type: "default",
          closeOnClick: false,
          closeButton: false,
          autoClose: false,
        });
      }
    } else {
      if (toast.isActive(key as React.ReactText)) {
        toast.update(key as React.ReactText, {
          type,
          render: message,
          closeButton: true,
          autoClose: 5000,
        });
      } else {
        toast(message, {
          toastId: key,
          type,
          autoClose: 5000,
          closeButton: true,
        });
      }
    }
  },
  close: (key) => toast.dismiss(key),
};
