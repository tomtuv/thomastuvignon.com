import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#242424" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/Inter-roman.var.woff2"
          type="font/woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          href="/Inter-italic.var.woff2"
          type="font/woff2"
          rel="preload"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
