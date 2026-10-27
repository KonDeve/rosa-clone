import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PROJECTS, Project } from '@/data/projects';
import ProjectDetailView from '@/components/project/ProjectDetailView';

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: 'Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.coverImage, alt: project.title }],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const project: Project = PROJECTS[currentIndex];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return <ProjectDetailView project={project} nextProject={nextProject} />;
}
