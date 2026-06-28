import type { Metadata } from "next";
import ProjectsIndex from "@/components/projects/ProjectsIndex";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected design & engineering work by Priyank.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsIndex />
      <div className="h-24" />
    </>
  );
}
