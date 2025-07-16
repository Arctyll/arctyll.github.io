import React from "react";
import type { PageMetaData } from "./lib/pageMetaMap";

interface PageTemplateProps extends PageMetaData {
  children ? : React.ReactNode;
}

const PageTemplate: React.FC < PageTemplateProps > = ({
  title,
  description,
  image,
  bundleEntryPoint,
  children,
}) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Fonts and Favicons */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <link rel="icon" href="https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/favicon-96x96.png" />
      <link rel="apple-touch-icon" href="https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/apple-touch-icon.png" />
      <link rel="manifest" href="https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/site.webmanifest" />
    </head>
    <body>
      <div id="root">{children}</div>
      <script type="module" src={bundleEntryPoint}></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://cdn.emailjs.com/dist/email.min.js" defer></script>
    </body>
  </html>
);

export default PageTemplate;