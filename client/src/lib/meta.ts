interface MetaData {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const updatePageMeta = (meta: MetaData) => {
  document.title = meta.title;
  
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', meta.description);
  }
  
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', meta.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', meta.description);
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && meta.url) {
    ogUrl.setAttribute('content', meta.url);
  }
  
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && meta.image) {
    ogImage.setAttribute('content', meta.image);
  }
  
  const twitterTitle = document.querySelector('meta[property="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', meta.title);
  }
  
  const twitterDescription = document.querySelector('meta[property="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', meta.description);
  }
  
  const twitterImage = document.querySelector('meta[property="twitter:image"]');
  if (twitterImage && meta.image) {
    twitterImage.setAttribute('content', meta.image);
  }
};