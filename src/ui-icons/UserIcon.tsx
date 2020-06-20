import React from "react";
import { createIcon } from "./createIcon";

export const UserIcon = createIcon(
  { name: "UserIcon" },
  <React.Fragment>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </React.Fragment>
);
