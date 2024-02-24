import { FragmentOf } from "gql.tada";
import { getDraftEntry, getHomePage, getPage, getProject } from "./api";
import { mediaFragment, projectCardFragment, textFragment } from "./fragments";

export type DraftEntry = Awaited<ReturnType<typeof getDraftEntry>>;
export type HomePage = Awaited<ReturnType<typeof getHomePage>>;
export type Project = Awaited<ReturnType<typeof getProject>>;
export type Page = Awaited<ReturnType<typeof getPage>>;

export type ProjectCard = FragmentOf<typeof projectCardFragment>;
export type Media = FragmentOf<typeof mediaFragment>;
export type Text = FragmentOf<typeof textFragment>;
