import type { FragmentOf, ResultOf } from "gql.tada";
import type {
  mediaFragment,
  projectCardFragment,
  textFragment,
} from "./fragments";
import type { homePageQuery } from "./queries";

export type HomePage = NonNullable<
  NonNullable<
    ResultOf<typeof homePageQuery>["homePageCollection"]
  >["items"][number]
>;
export type ProjectCard = FragmentOf<typeof projectCardFragment>;
export type Media = FragmentOf<typeof mediaFragment>;
export type Text = FragmentOf<typeof textFragment>;
export type ProjectBlock = Media | Text;
export type ContentfulImage = NonNullable<ProjectCard["thumbnail"]>;
