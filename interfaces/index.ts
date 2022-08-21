import type { Document } from "@contentful/rich-text-types";

export type HomePage = {
  __typename: "HomePage";
  title: string;
  jobTitle: string;
  profilePicture: Image;
  intro: { json: Document };
  projectsCollection: { items: Project[] };
};

export type Project = {
  __typename: "Project";
  sys: { id: string };
  title: string;
  description: string;
  slug: string;
  thumbnail: Image;
  blocksCollection: { items: Text[] | Media[] };
};

export type Page = {
  __typename: "Page";
  title: string;
  slug: string;
  description: string;
  body: { json: Document };
};

export type Text = {
  __typename: "Text";
  sys: { id: string };
  title: string;
  subtitle: string;
  body: { json: Document };
  link: string;
};

export type Media = {
  __typename: "Media";
  sys: { id: string };
  title: string;
  layout: "Full width" | "Columns";
  imagesCollection: { items: Image[] };
};

type Image = {
  sys: { id: string };
  url: string;
  width: number;
  height: number;
  description: string;
};
