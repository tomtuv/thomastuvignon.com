import type { FragmentOf, ResultOf } from "gql.tada";
import type {
  mediaFragment,
  projectCardFragment,
  textFragment,
} from "./fragments";
import type { homePageQuery, pageQuery, projectQuery } from "./queries";

type CollectionItem<T> = T extends { items: ReadonlyArray<infer Item> }
  ? NonNullable<Item>
  : never;

export type HomePage = CollectionItem<
  NonNullable<ResultOf<typeof homePageQuery>["homePageCollection"]>
>;
export type Project = CollectionItem<
  NonNullable<ResultOf<typeof projectQuery>["projectCollection"]>
>;
export type Page = CollectionItem<
  NonNullable<ResultOf<typeof pageQuery>["pageCollection"]>
>;

export type ProjectCard = FragmentOf<typeof projectCardFragment>;
export type Media = FragmentOf<typeof mediaFragment>;
export type Text = FragmentOf<typeof textFragment>;
export type ProjectBlock = Media | Text;
export type ContentfulImage = NonNullable<ProjectCard["thumbnail"]>;
