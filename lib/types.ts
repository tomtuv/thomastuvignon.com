import { FragmentOf, getHomePage, getPage, getProject } from "./api";
import {
  draftEntryFragment,
  mediaFragment,
  projectBlockFragment,
  projectCardFragment,
  textFragment,
} from "./fragments";

export type HomePage = Awaited<ReturnType<typeof getHomePage>>;
export type Project = Awaited<ReturnType<typeof getProject>>;
export type Page = Awaited<ReturnType<typeof getPage>>;

export type DraftEntry = FragmentOf<typeof draftEntryFragment>;
export type ProjectCard = FragmentOf<typeof projectCardFragment>;
export type ProjectBlock = FragmentOf<typeof projectBlockFragment>;
export type Media = FragmentOf<typeof mediaFragment>;
export type Text = FragmentOf<typeof textFragment>;
