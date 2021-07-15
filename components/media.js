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
          key={image.sys.id}
        >
          <figure>
            <Image
              src={image.url}
              alt={project.title}
              width={image.width}
              height={image.height}
              layout="responsive"
              sizes="(min-width: 75em) 1040px, (min-width: 64em) 880px, (min-width: 48em) 640px, (min-width: 35em) 480px, 100vw"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${image.url}&w=16&q=1`}
            />
          </figure>
        </div>
      ))}
    </section>
  );
}
