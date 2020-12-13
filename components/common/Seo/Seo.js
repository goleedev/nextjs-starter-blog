import Head from "next/head";

import { getSiteMetaData } from "@utils/helpers";

export function SEO({ title, description = "" }) {
  const siteMetadata = getSiteMetaData();

  const metaDescription = description || siteMetadata.description;

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="instagram:card" content="summary" />
      <meta name="instagram:title" content={title} />
      <meta name="instagram:description" content={metaDescription} />
      <meta name="instagram:creator" content={siteMetadata.social.instagram} />
      <link rel="icon" type="image/png" href="../../../content/assets/favicon.ico" />
      <link rel="apple-touch-icon" href="../../../content/assets/favicon.ico" />
    </Head>
  );
}
