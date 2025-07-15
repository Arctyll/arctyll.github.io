import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { metaMap, MetaData } from "@/lib/meta";

function findMeta(path: string): MetaData {
  if (metaMap[path]) return metaMap[path];
  
  const matched = Object.keys(metaMap)
    .filter((key) => path.startsWith(key))
    .sort((a, b) => b.length - a.length)[0];
  
  return metaMap[matched] || metaMap["/"];
}

export default function RouteMeta() {
  const [location] = useLocation();
  const meta = findMeta(location);
  
  return (
    <Helmet key={location}>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image || ""} />
      <meta property="og:url" content={meta.url || (typeof window !== "undefined" ? window.location.href : "")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image || ""} />
    </Helmet>
  );
}