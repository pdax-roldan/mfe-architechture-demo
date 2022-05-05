import { ReactNode } from "react";
import { AppShell } from "@mantine/core";
import { Navbar } from "./Navbar";

type PageProps = { children?: ReactNode };

export function Page({ children }: PageProps) {
  return <AppShell header={<Navbar />}>{children}</AppShell>;
}
