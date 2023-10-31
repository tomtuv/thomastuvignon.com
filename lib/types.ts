export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: unknown; output: unknown };
  Dimension: { input: unknown; output: unknown };
  HexColor: { input: unknown; output: unknown };
  JSON: { input: unknown; output: unknown };
  Quality: { input: unknown; output: unknown };
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentType?: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  fileName?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt?: InputMaybe<Scalars["Int"]["input"]>;
  size_gte?: InputMaybe<Scalars["Int"]["input"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]["input"]>;
  size_lte?: InputMaybe<Scalars["Int"]["input"]>;
  size_not?: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  url_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not?: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  homePageCollection?: Maybe<HomePageCollection>;
  mediaCollection?: Maybe<MediaCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsHomePageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsHomePageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsMediaCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsMediaCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsProjectCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum AssetLinkingCollectionsHomePageCollectionOrder {
  JobTitleAsc = "jobTitle_ASC",
  JobTitleDesc = "jobTitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum AssetLinkingCollectionsMediaCollectionOrder {
  LayoutAsc = "layout_ASC",
  LayoutDesc = "layout_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum AssetLinkingCollectionsProjectCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/homePage) */
export type HomePage = Entry & {
  __typename?: "HomePage";
  contentfulMetadata: ContentfulMetadata;
  intro?: Maybe<HomePageIntro>;
  jobTitle?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<HomePageLinkingCollections>;
  profilePicture?: Maybe<Asset>;
  projectsCollection?: Maybe<HomePageProjectsCollection>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
  video?: Maybe<Asset>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/homePage) */
export type HomePageIntroArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/homePage) */
export type HomePageJobTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/homePage) */
export type HomePageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/homePage) */
export type HomePageProfilePictureArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/homePage) */
export type HomePageProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<HomePageProjectsCollectionOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/homePage) */
export type HomePageTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/homePage) */
export type HomePageVideoArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HomePageCollection = {
  __typename?: "HomePageCollection";
  items: Array<Maybe<HomePage>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type HomePageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomePageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomePageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  intro_contains?: InputMaybe<Scalars["String"]["input"]>;
  intro_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  intro_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  jobTitle?: InputMaybe<Scalars["String"]["input"]>;
  jobTitle_contains?: InputMaybe<Scalars["String"]["input"]>;
  jobTitle_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  jobTitle_not?: InputMaybe<Scalars["String"]["input"]>;
  jobTitle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  profilePicture_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  projects?: InputMaybe<CfProjectNestedFilter>;
  projectsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  video_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HomePageIntro = {
  __typename?: "HomePageIntro";
  json: Scalars["JSON"]["output"];
  links: HomePageIntroLinks;
};

export type HomePageIntroAssets = {
  __typename?: "HomePageIntroAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HomePageIntroEntries = {
  __typename?: "HomePageIntroEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HomePageIntroLinks = {
  __typename?: "HomePageIntroLinks";
  assets: HomePageIntroAssets;
  entries: HomePageIntroEntries;
  resources: HomePageIntroResources;
};

export type HomePageIntroResources = {
  __typename?: "HomePageIntroResources";
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type HomePageLinkingCollections = {
  __typename?: "HomePageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type HomePageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum HomePageOrder {
  JobTitleAsc = "jobTitle_ASC",
  JobTitleDesc = "jobTitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type HomePageProjectsCollection = {
  __typename?: "HomePageProjectsCollection";
  items: Array<Maybe<Project>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum HomePageProjectsCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]["input"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]["input"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]["input"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]["input"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/media) */
export type Media = Entry & {
  __typename?: "Media";
  contentfulMetadata: ContentfulMetadata;
  imagesCollection?: Maybe<AssetCollection>;
  layout?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<MediaLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/media) */
export type MediaImagesCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/media) */
export type MediaLayoutArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/media) */
export type MediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/media) */
export type MediaTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type MediaCollection = {
  __typename?: "MediaCollection";
  items: Array<Maybe<Media>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type MediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagesCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  layout?: InputMaybe<Scalars["String"]["input"]>;
  layout_contains?: InputMaybe<Scalars["String"]["input"]>;
  layout_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  layout_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  layout_not?: InputMaybe<Scalars["String"]["input"]>;
  layout_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MediaLinkingCollections = {
  __typename?: "MediaLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};

export type MediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MediaLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<MediaLinkingCollectionsProjectCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum MediaLinkingCollectionsProjectCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum MediaOrder {
  LayoutAsc = "layout_ASC",
  LayoutDesc = "layout_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/page) */
export type Page = Entry & {
  __typename?: "Page";
  body?: Maybe<PageBody>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/page) */
export type PageBodyArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/page) */
export type PageDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type PageBody = {
  __typename?: "PageBody";
  json: Scalars["JSON"]["output"];
  links: PageBodyLinks;
};

export type PageBodyAssets = {
  __typename?: "PageBodyAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBodyEntries = {
  __typename?: "PageBodyEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBodyLinks = {
  __typename?: "PageBodyLinks";
  assets: PageBodyAssets;
  entries: PageBodyEntries;
  resources: PageBodyResources;
};

export type PageBodyResources = {
  __typename?: "PageBodyResources";
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type PageCollection = {
  __typename?: "PageCollection";
  items: Array<Maybe<Page>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  body_contains?: InputMaybe<Scalars["String"]["input"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageLinkingCollections = {
  __typename?: "PageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PageOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/project) */
export type Project = Entry & {
  __typename?: "Project";
  blocksCollection?: Maybe<ProjectBlocksCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  slug?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/project) */
export type ProjectBlocksCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectBlocksFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/project) */
export type ProjectDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/project) */
export type ProjectSlugArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/project) */
export type ProjectThumbnailArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/project) */
export type ProjectTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectBlocksCollection = {
  __typename?: "ProjectBlocksCollection";
  items: Array<Maybe<ProjectBlocksItem>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ProjectBlocksFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectBlocksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectBlocksFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ProjectBlocksItem = Media | Text;

export type ProjectCollection = {
  __typename?: "ProjectCollection";
  items: Array<Maybe<Project>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  blocks?: InputMaybe<CfblocksMultiTypeNestedFilter>;
  blocksCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ProjectLinkingCollections = {
  __typename?: "ProjectLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  homePageCollection?: Maybe<HomePageCollection>;
};

export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectLinkingCollectionsHomePageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<ProjectLinkingCollectionsHomePageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ProjectLinkingCollectionsHomePageCollectionOrder {
  JobTitleAsc = "jobTitle_ASC",
  JobTitleDesc = "jobTitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ProjectOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type Query = {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homePage?: Maybe<HomePage>;
  homePageCollection?: Maybe<HomePageCollection>;
  media?: Maybe<Media>;
  mediaCollection?: Maybe<MediaCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  text?: Maybe<Text>;
  textCollection?: Maybe<TextCollection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryHomePageArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryHomePageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<HomePageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<HomePageFilter>;
};

export type QueryMediaArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryMediaCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<MediaOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<MediaFilter>;
};

export type QueryPageArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PageFilter>;
};

export type QueryProjectArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProjectFilter>;
};

export type QueryTextArgs = {
  id: Scalars["String"]["input"];
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryTextCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<Array<InputMaybe<TextOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TextFilter>;
};

export type ResourceLink = {
  __typename?: "ResourceLink";
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: "ResourceSys";
  linkType: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  urn: Scalars["String"]["output"];
};

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"]["output"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  publishedVersion?: Maybe<Scalars["Int"]["output"]>;
  spaceId: Scalars["String"]["output"];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedVersion?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["Float"]["input"]>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/text) */
export type Text = Entry & {
  __typename?: "Text";
  body?: Maybe<TextBody>;
  contentfulMetadata: ContentfulMetadata;
  link?: Maybe<Scalars["String"]["output"]>;
  linkedFrom?: Maybe<TextLinkingCollections>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/text) */
export type TextBodyArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/text) */
export type TextLinkArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/text) */
export type TextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/text) */
export type TextSubtitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/lkq9rik3wezf/content_types/text) */
export type TextTitleArgs = {
  locale?: InputMaybe<Scalars["String"]["input"]>;
};

export type TextBody = {
  __typename?: "TextBody";
  json: Scalars["JSON"]["output"];
  links: TextBodyLinks;
};

export type TextBodyAssets = {
  __typename?: "TextBodyAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextBodyEntries = {
  __typename?: "TextBodyEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextBodyLinks = {
  __typename?: "TextBodyLinks";
  assets: TextBodyAssets;
  entries: TextBodyEntries;
  resources: TextBodyResources;
};

export type TextBodyResources = {
  __typename?: "TextBodyResources";
  block: Array<ResourceLink>;
  hyperlink: Array<ResourceLink>;
  inline: Array<ResourceLink>;
};

export type TextCollection = {
  __typename?: "TextCollection";
  items: Array<Maybe<Text>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type TextFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  body_contains?: InputMaybe<Scalars["String"]["input"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  body_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  link_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  link_not?: InputMaybe<Scalars["String"]["input"]>;
  link_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subtitle?: InputMaybe<Scalars["String"]["input"]>;
  subtitle_contains?: InputMaybe<Scalars["String"]["input"]>;
  subtitle_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subtitle_not?: InputMaybe<Scalars["String"]["input"]>;
  subtitle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type TextLinkingCollections = {
  __typename?: "TextLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};

export type TextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TextLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  order?: InputMaybe<
    Array<InputMaybe<TextLinkingCollectionsProjectCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum TextLinkingCollectionsProjectCollectionOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum TextOrder {
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type CfProjectNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfProjectNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfProjectNestedFilter>>>;
  blocksCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfblocksMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfblocksMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfblocksMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};
