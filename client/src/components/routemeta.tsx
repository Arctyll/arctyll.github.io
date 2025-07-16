// src/components/RouteMeta.tsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { metaMap } from "@/lib/meta";

export default function RouteMeta() {
  const { pathname } = useLocation();
  const meta = metaMap[pathname] || metaMap["/"];
  
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {meta.image && <meta property="og:image" content={meta.image} />}
      {meta.url && <meta property="og:url" content={meta.url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image && <meta name="twitter:image" content={meta.image} />}
    </Helmet>
  );
}