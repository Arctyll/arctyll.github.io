import { Helmet } from "react-helmet-async";
import { createRoot } from "react-dom/client";

export interface MetaData {
  title: string;
  description: string;
  image ? : string;
  url ? : string;
}

let helmetRoot: HTMLDivElement | null = null;

export const updatePageMeta = (meta: MetaData) => {
  if (!helmetRoot) {
    helmetRoot = document.createElement("div");
    document.head.appendChild(helmetRoot);
  }
  
  createRoot(helmetRoot).render(
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image || ""} />
      <meta property="og:url" content={meta.url || window.location.href} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image || ""} />
    </Helmet>
  );
};