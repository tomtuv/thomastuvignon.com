/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": null,
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "asset",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "assetCollection",
            "type": {
              "kind": "OBJECT",
              "name": "AssetCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "AssetFilter",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "AssetOrder",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "project",
            "type": {
              "kind": "OBJECT",
              "name": "Project",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "projectCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectFilter",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ProjectOrder",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "page",
            "type": {
              "kind": "OBJECT",
              "name": "Page",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "pageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "PageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PageFilter",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "PageOrder",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "homePage",
            "type": {
              "kind": "OBJECT",
              "name": "HomePage",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "homePageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "HomePageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "HomePageFilter",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "HomePageOrder",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "media",
            "type": {
              "kind": "OBJECT",
              "name": "Media",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "mediaCollection",
            "type": {
              "kind": "OBJECT",
              "name": "MediaCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "MediaFilter",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MediaOrder",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "text",
            "type": {
              "kind": "OBJECT",
              "name": "Text",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "textCollection",
            "type": {
              "kind": "OBJECT",
              "name": "TextCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "TextFilter",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TextOrder",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "EntryFilter",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "EntryOrder",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "_node",
            "type": {
              "kind": "INTERFACE",
              "name": "_Node",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "OBJECT",
        "name": "Asset",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "contentType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "fileName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "size",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "transform",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ImageTransformOptions",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "AssetLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Sys",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "spaceId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "environmentId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "firstPublishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedVersion",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "DateTime"
      },
      {
        "kind": "OBJECT",
        "name": "ContentfulMetadata",
        "fields": [
          {
            "name": "tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ContentfulTag",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ContentfulTag",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ImageTransformOptions",
        "inputFields": [
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Dimension",
              "ofType": null
            }
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Dimension",
              "ofType": null
            }
          },
          {
            "name": "quality",
            "type": {
              "kind": "SCALAR",
              "name": "Quality",
              "ofType": null
            }
          },
          {
            "name": "cornerRadius",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "resizeStrategy",
            "type": {
              "kind": "ENUM",
              "name": "ImageResizeStrategy",
              "ofType": null
            }
          },
          {
            "name": "resizeFocus",
            "type": {
              "kind": "ENUM",
              "name": "ImageResizeFocus",
              "ofType": null
            }
          },
          {
            "name": "backgroundColor",
            "type": {
              "kind": "SCALAR",
              "name": "HexColor",
              "ofType": null
            }
          },
          {
            "name": "format",
            "type": {
              "kind": "ENUM",
              "name": "ImageFormat",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Dimension"
      },
      {
        "kind": "SCALAR",
        "name": "Quality"
      },
      {
        "kind": "ENUM",
        "name": "ImageResizeStrategy",
        "enumValues": [
          {
            "name": "FIT"
          },
          {
            "name": "PAD"
          },
          {
            "name": "FILL"
          },
          {
            "name": "SCALE"
          },
          {
            "name": "CROP"
          },
          {
            "name": "THUMB"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ImageResizeFocus",
        "enumValues": [
          {
            "name": "CENTER"
          },
          {
            "name": "TOP"
          },
          {
            "name": "TOP_RIGHT"
          },
          {
            "name": "RIGHT"
          },
          {
            "name": "BOTTOM_RIGHT"
          },
          {
            "name": "BOTTOM"
          },
          {
            "name": "BOTTOM_LEFT"
          },
          {
            "name": "LEFT"
          },
          {
            "name": "TOP_LEFT"
          },
          {
            "name": "FACE"
          },
          {
            "name": "FACES"
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "HexColor"
      },
      {
        "kind": "ENUM",
        "name": "ImageFormat",
        "enumValues": [
          {
            "name": "JPG"
          },
          {
            "name": "JPG_PROGRESSIVE"
          },
          {
            "name": "PNG"
          },
          {
            "name": "PNG8"
          },
          {
            "name": "WEBP"
          },
          {
            "name": "AVIF"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AssetLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "projectCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "homePageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "HomePageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "mediaCollection",
            "type": {
              "kind": "OBJECT",
              "name": "MediaCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "EntryCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "Entry",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Project"
          },
          {
            "kind": "OBJECT",
            "name": "HomePage"
          },
          {
            "kind": "OBJECT",
            "name": "Media"
          },
          {
            "kind": "OBJECT",
            "name": "Text"
          },
          {
            "kind": "OBJECT",
            "name": "Page"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProjectCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Project",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "thumbnail",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "blocksCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectBlocksCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectBlocksFilter",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProjectLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "homePageCollection",
            "type": {
              "kind": "OBJECT",
              "name": "HomePageCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ProjectLinkingCollectionsHomePageCollectionOrder",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HomePageCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "HomePage",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HomePage",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "HomePageLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "jobTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "profilePicture",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "video",
            "type": {
              "kind": "OBJECT",
              "name": "Asset",
              "ofType": null
            },
            "args": [
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "intro",
            "type": {
              "kind": "OBJECT",
              "name": "HomePageIntro",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "projectsCollection",
            "type": {
              "kind": "OBJECT",
              "name": "HomePageProjectsCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ProjectFilter",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "HomePageProjectsCollectionOrder",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "HomePageLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HomePageIntro",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HomePageIntroLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "JSON"
      },
      {
        "kind": "OBJECT",
        "name": "HomePageIntroLinks",
        "fields": [
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HomePageIntroEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HomePageIntroAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HomePageIntroResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HomePageIntroEntries",
        "fields": [
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HomePageIntroAssets",
        "fields": [
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HomePageIntroResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ResourceLink",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ResourceSys",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ResourceSys",
        "fields": [
          {
            "name": "urn",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "linkType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HomePageProjectsCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Project",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectFilter",
        "inputFields": [
          {
            "name": "blocks",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfblocksMultiTypeNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "thumbnail_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "blocksCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfblocksMultiTypeNestedFilter",
        "inputFields": [
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfblocksMultiTypeNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfblocksMultiTypeNestedFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SysFilter",
        "inputFields": [
          {
            "name": "id_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_not",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedAt_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedAt_gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedAt_lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_not",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "firstPublishedAt_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            }
          },
          {
            "name": "firstPublishedAt_gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "firstPublishedAt_lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_not",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedVersion_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "publishedVersion_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "publishedVersion_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContentfulMetadataFilter",
        "inputFields": [
          {
            "name": "tags_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "tags",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataTagsFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ContentfulMetadataTagsFilter",
        "inputFields": [
          {
            "name": "id_contains_all",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id_contains_some",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id_contains_none",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "HomePageProjectsCollectionOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ProjectLinkingCollectionsHomePageCollectionOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "jobTitle_ASC"
          },
          {
            "name": "jobTitle_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ProjectBlocksCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "UNION",
                  "name": "ProjectBlocksItem",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "ProjectBlocksItem",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Media"
          },
          {
            "kind": "OBJECT",
            "name": "Text"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Media",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "MediaLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "imagesCollection",
            "type": {
              "kind": "OBJECT",
              "name": "AssetCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "layout",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MediaLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "projectCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MediaLinkingCollectionsProjectCollectionOrder",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MediaLinkingCollectionsProjectCollectionOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AssetCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Text",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "TextLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "subtitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "body",
            "type": {
              "kind": "OBJECT",
              "name": "TextBody",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "link",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TextLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "projectCollection",
            "type": {
              "kind": "OBJECT",
              "name": "ProjectCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "order",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TextLinkingCollectionsProjectCollectionOrder",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TextLinkingCollectionsProjectCollectionOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TextBody",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TextBodyLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TextBodyLinks",
        "fields": [
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TextBodyEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TextBodyAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "TextBodyResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TextBodyEntries",
        "fields": [
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TextBodyAssets",
        "fields": [
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TextBodyResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ProjectBlocksFilter",
        "inputFields": [
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectBlocksFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "ProjectBlocksFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MediaCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Media",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "AssetFilter",
        "inputFields": [
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "url_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "url_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "size_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "size",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_not",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "size_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "size_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "size_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "contentType_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "contentType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentType_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "contentType_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fileName_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "fileName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fileName_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fileName_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "fileName_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "fileName_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fileName_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "width_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "width",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_not",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "width_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "width_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "width_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "height",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_not",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "height_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "height_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "height_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssetFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "AssetFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "AssetOrder",
        "enumValues": [
          {
            "name": "url_ASC"
          },
          {
            "name": "url_DESC"
          },
          {
            "name": "size_ASC"
          },
          {
            "name": "size_DESC"
          },
          {
            "name": "contentType_ASC"
          },
          {
            "name": "contentType_DESC"
          },
          {
            "name": "fileName_ASC"
          },
          {
            "name": "fileName_DESC"
          },
          {
            "name": "width_ASC"
          },
          {
            "name": "width_DESC"
          },
          {
            "name": "height_ASC"
          },
          {
            "name": "height_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ProjectOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Page",
        "fields": [
          {
            "name": "sys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Sys",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ContentfulMetadata",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "linkedFrom",
            "type": {
              "kind": "OBJECT",
              "name": "PageLinkingCollections",
              "ofType": null
            },
            "args": [
              {
                "name": "allowedLocales",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "body",
            "type": {
              "kind": "OBJECT",
              "name": "PageBody",
              "ofType": null
            },
            "args": [
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Entry"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PageLinkingCollections",
        "fields": [
          {
            "name": "entryCollection",
            "type": {
              "kind": "OBJECT",
              "name": "EntryCollection",
              "ofType": null
            },
            "args": [
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "preview",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "locale",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageBody",
        "fields": [
          {
            "name": "json",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "JSON",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageBodyLinks",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageBodyLinks",
        "fields": [
          {
            "name": "entries",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageBodyEntries",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "assets",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageBodyAssets",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageBodyResources",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageBodyEntries",
        "fields": [
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "INTERFACE",
                  "name": "Entry",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageBodyAssets",
        "fields": [
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Asset",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageBodyResources",
        "fields": [
          {
            "name": "block",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "inline",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "hyperlink",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ResourceLink",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Page",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PageFilter",
        "inputFields": [
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "body_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "PageOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "slug_ASC"
          },
          {
            "name": "slug_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "HomePageFilter",
        "inputFields": [
          {
            "name": "projects",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "cfProjectNestedFilter",
              "ofType": null
            }
          },
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "jobTitle_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "jobTitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "jobTitle_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "jobTitle_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "jobTitle_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "jobTitle_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "jobTitle_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "profilePicture_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "video_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "intro_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "intro_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "intro_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "projectsCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "HomePageFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "HomePageFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "cfProjectNestedFilter",
        "inputFields": [
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "slug_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "slug_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "thumbnail_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "blocksCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfProjectNestedFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "cfProjectNestedFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "HomePageOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "jobTitle_ASC"
          },
          {
            "name": "jobTitle_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MediaFilter",
        "inputFields": [
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "imagesCollection_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "layout_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "layout",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "layout_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "layout_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "layout_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "layout_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "layout_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MediaFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "MediaFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "MediaOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "layout_ASC"
          },
          {
            "name": "layout_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TextCollection",
        "fields": [
          {
            "name": "total",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "skip",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "limit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Text",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "TextFilter",
        "inputFields": [
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "title_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subtitle_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "subtitle",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subtitle_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subtitle_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "subtitle_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "subtitle_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "subtitle_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "body_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "body_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "link_exists",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "link",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "link_not",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "link_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "link_not_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "link_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "link_not_contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TextFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "TextFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "TextOrder",
        "enumValues": [
          {
            "name": "title_ASC"
          },
          {
            "name": "title_DESC"
          },
          {
            "name": "subtitle_ASC"
          },
          {
            "name": "subtitle_DESC"
          },
          {
            "name": "link_ASC"
          },
          {
            "name": "link_DESC"
          },
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "EntryFilter",
        "inputFields": [
          {
            "name": "sys",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SysFilter",
              "ofType": null
            }
          },
          {
            "name": "contentfulMetadata",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ContentfulMetadataFilter",
              "ofType": null
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "EntryFilter",
                "ofType": null
              }
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "EntryFilter",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "EntryOrder",
        "enumValues": [
          {
            "name": "sys_id_ASC"
          },
          {
            "name": "sys_id_DESC"
          },
          {
            "name": "sys_publishedAt_ASC"
          },
          {
            "name": "sys_publishedAt_DESC"
          },
          {
            "name": "sys_firstPublishedAt_ASC"
          },
          {
            "name": "sys_firstPublishedAt_DESC"
          },
          {
            "name": "sys_publishedVersion_ASC"
          },
          {
            "name": "sys_publishedVersion_DESC"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "_Node",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": []
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}