interface MetaData {
  title: string;
  description: string;
  image ? : string;
  url ? : string;
}

export const updatePageMeta = (meta: MetaData) => {
  document.title = meta.title;
  
  const setMeta = (selector: string, value ? : string) => {
    const element = document.querySelector(selector);
    if (element && value) {
      element.setAttribute("content", value);
    }
  };

  setMeta('meta[name="title"]', meta.title);
  setMeta('meta[name="description"]', meta.description);

  setMeta('meta[property="og:title"]', meta.title);
  setMeta('meta[property="og:description"]', meta.description);
  setMeta('meta[property="og:url"]', meta.url);
  setMeta('meta[property="og:image"]', meta.image);

  setMeta('meta[name="twitter:title"]', meta.title);
  setMeta('meta[name="twitter:description"]', meta.description);
  setMeta('meta[name="twitter:image"]', meta.image);
  setMeta('meta[name="twitter:url"]', meta.url);
};