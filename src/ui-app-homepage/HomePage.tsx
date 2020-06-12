import React from "react";
import Link from "next/link";

import { DefaultLayout } from "../ui-app/DefaultLayout";

export function HomePage(props: {}) {
  return (
    <DefaultLayout>
      <Link href="/post">Posts</Link>
    </DefaultLayout>
  );
}
