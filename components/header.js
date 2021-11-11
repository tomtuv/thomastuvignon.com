import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import Bubbles from "./bubbles";
import Modal from "./modal";

export default function Header({ data }) {
  const { formatMessage } = useIntl();

  return (
    <header className="header">
      <Bubbles />
      <div className="grid">
        {data.__typename === "HomePage" ? (
          <>
            <div style={{ "--grid-column-lg": "span 4" }}>
              <figure>
                <Image
                  src={data.profilePicture.url}
                  alt={data.title}
                  width={data.profilePicture.width}
                  height={data.profilePicture.height}
                  layout="responsive"
                  sizes="(min-width: 75em) 170px, (min-width: 64em) 160px, 130px"
                  placeholder="blur"
                  blurDataURL={`/_next/image?url=${data.profilePicture.url}&w=16&q=1`}
                  priority
                />
              </figure>
            </div>
            <div style={{ "--grid-column-lg": "span 8" }}>
              <h1>{data.title}</h1>
              <p>{data.jobTitle}</p>
              <Modal videoUrl={data.video.url} />
            </div>
          </>
        ) : (
          <div>
            <Link href="/" aria-label={formatMessage({ id: "back" })}>
              <a className="link link-back">Thomas Tuvignon</a>
            </Link>
            <h1>{data.title}</h1>
          </div>
        )}
      </div>
    </header>
  );
}
