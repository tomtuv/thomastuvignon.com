import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Media = ({ project, block }) => (
  <section className="grid">
    {block.images.map((image, i) => (
      <figure
        data-column="12"
        {...(block.layout === "2 columns"
          ? { "data-column-md": "6" }
          : block.layout === "3 columns" && {
              "data-column-md": "6",
              "data-column-lg": "4",
            })}
        data-aos="fade-up"
        key={i}
      >
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={project.title}
          style={{ display: "block" }}
        />
      </figure>
    ))}
  </section>
)

export default Media
