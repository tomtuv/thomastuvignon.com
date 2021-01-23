import React from "react";
import Img from "gatsby-image";

const Media = ({ project, block }) => (
  <section className="grid">
    {block.images.map((image, i) => (
      <figure
        className={`grid-col-12
          ${
            block.layout === "2 columns"
              ? " grid-col-md-6"
              : block.layout === "3 columns"
              ? " grid-col-md-6 grid-col-lg-4"
              : ""
          }`}
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
