import type { Document } from "@contentful/rich-text-types";

export interface HomePage {
  __typename: "HomePage";
  title: string;
  jobTitle: string;
  profilePicture: Image;
  intro: { json: Document };
  projectsCollection: { items: Project[] };
}

export interface Project {
  __typename: "Project";
  sys: { id: string };
  title: string;
  description: string;
  slug: string;
  thumbnail: Image;
  blocksCollection: { items: Text[] | Media[] };
}

export interface Page {
  __typename: "Page";
  title: string;
  slug: string;
  description: string;
  body: { json: Document };
}

export interface Text {
  __typename: "Text";
  sys: { id: string };
  title: string;
  subtitle: string;
  body: { json: Document };
  link: string;
}

export interface Media {
  __typename: "Media";
  sys: { id: string };
  title: string;
  layout: "Full width" | "Columns";
  imagesCollection: { items: Image[] };
}

export interface Image {
  sys: { id: string };
  url: string;
  width: number;
  height: number;
  description: string;
}
