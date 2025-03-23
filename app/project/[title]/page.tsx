import { notFound } from "next/navigation";
import { getProjectByTitle } from "@/lib/api/projects";
import { ProjectHeader } from "@/components/project/second-page/header";
import { ProjectImage } from "@/components/project/second-page/image";
import { ProjectTechStack } from "@/components/project/second-page/tech-stack";
import { ProjectDemoButton } from "@/components/project/second-page/demo-button";
import { Container } from "@/components/ui/container";
import { ProjectChallenges } from "@/components/project/second-page/challange";
import { ProjectOutcome } from "@/components/project/second-page/out-come";

type Params = Promise<{ title: string }>;


export async function generateMetadata({ params }: { params: Params }) {
  const { title } = await params;
  const project = getProjectByTitle(title);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

}


export default async function ProjectPage({ params }: { params: Params }) {
  const { title } = await params;
  const project = getProjectByTitle(title);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-16">
      <ProjectHeader
        title={project.title}
        description={project.description}
        tags={project.tags}
      />

      <Container className="flex justify-end mb-4">
        {project.link && <ProjectDemoButton link={project.link} />}
      </Container>

      <ProjectImage src={project.imageSrc} alt={project.title} />

      {project.technologies && (
        <ProjectTechStack technologies={project.technologies} />
      )}

      {project.challenges && project.challenges.length > 0 && (
        <ProjectChallenges challenges={project.challenges} />
      )}

      {project.outcome && <ProjectOutcome outcome={project.outcome} />}
    </div>
  );
}