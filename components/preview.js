import Link from "next/link";

export default function Preview() {
  return (
    <div className="preview">
      <div className="grid">
        <p>
          This is a page preview.{" "}
          <Link href="/api/exit-preview">
            <a>Click here</a>
          </Link>{" "}
          to exit preview mode.
        </p>
      </div>
    </div>
  );
}
