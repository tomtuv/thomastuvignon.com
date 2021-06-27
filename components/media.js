import Image from "next/image";

export default function Media({ project, block }) {
  return (
    <section className="grid">
      {block.imagesCollection.items.map((image) => (
        <div
          data-column="12"
          {...(block.layout === "2 columns"
            ? { "data-column-md": "6" }
            : block.layout === "3 columns" && {
                "data-column-md": "6",
                "data-column-lg": "4",
              })}
          data-aos="fade-up"
          key={image.id}
        >
          <Image src={image.url} alt={project.title} layout="fill" />
        </div>
      ))}
    </section>
  );
}
