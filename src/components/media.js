import React from "react";
import Img from "gatsby-image";

const Media = ({ project, block }) => (
  <section className="grid">
    {block.images.map((image, i) => (
      <figure
        className="grid-column"
        {...(block.layout === "2 columns"
          ? { "data-column-md": "6" }
          : block.layout === "3 columns" && {
              "data-column-md": "6",
              "data-column-lg": "4",
            })}
        data-aos="fade-up"
        key={i}
      >
        <Img
          fixed={image.fixed}
          alt={project.title}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
          imgStyle={{ position: "relative" }}
          placeholderStyle={{ position: "absolute" }}
        />
      </figure>
    ))}
  </section>
);

export default Media;
